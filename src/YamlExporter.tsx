import { CodeEditor, CodeEditorControl, Language } from '@patternfly/react-code-editor';
import { Card, Title } from '@patternfly/react-core';
import { CopyIcon, JsIcon } from '@patternfly/react-icons';
import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { EditorDidMount } from 'react-monaco-editor';
import { stringify } from 'yaml';

interface YamlExporterProps {
  className?: string;
  model: Record<string, unknown>;
}

export const YamlExporter: FunctionComponent<YamlExporterProps> = (props) => {
  const [language, setLanguage] = useState<Language>(Language.yaml);
  const [stringifiedModel, setStringifiedModel] = useState<string>('');

  useEffect(() => {
    if (language === 'yaml') {
      setStringifiedModel(stringify(props.model));
    } else {
      setStringifiedModel(JSON.stringify(props.model, null, 4));
    }
  }, [props.model, language]);

  const onYamlClick = useCallback(() => {
    setLanguage(Language.yaml);
  }, []);
  const onJsonClick = useCallback(() => {
    setLanguage(Language.json);
  }, []);

  const onEditorDidMount: EditorDidMount = useCallback((editor, monaco) => {
    editor.layout();
    editor.focus();
    monaco.editor.getModels()[0].updateOptions({ tabSize: 4 });
  }, []);

  const customControls = [
    <CodeEditorControl
      icon={<CopyIcon />}
      aria-label="Convert to YAML"
      tooltipProps={{ content: 'Convert to YAML' }}
      onClick={onYamlClick}
      isVisible
    />,
    <CodeEditorControl
      icon={<JsIcon />}
      aria-label="Convert to JSON"
      tooltipProps={{ content: 'Convert to JSON' }}
      onClick={onJsonClick}
      isVisible
    />,
  ];

  return (
    <div className={props.className}>
      <Title headingLevel="h1" size="lg">
        Export
      </Title>

      <Card>
        <CodeEditor
          isDarkTheme
          isLineNumbersVisible
          isReadOnly
          isLanguageLabelVisible
          code={stringifiedModel}
          language={language}
          onEditorDidMount={onEditorDidMount}
          customControls={customControls}
          height='90vh'
          />
      </Card>
    </div>
  );
};
