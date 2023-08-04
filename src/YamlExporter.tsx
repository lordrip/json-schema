import { CodeEditor, CodeEditorControl, Language } from '@patternfly/react-code-editor';
import { Card, Title } from '@patternfly/react-core';
import { CopyIcon, JsIcon } from '@patternfly/react-icons';
import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { EditorDidMount } from 'react-monaco-editor';
import { stringify } from 'yaml';

interface YamlExporterProps {
  className?: string;
  model: Record<string, unknown> | Record<string, unknown>[];
}

const tabSize = 2;

export const YamlExporter: FunctionComponent<YamlExporterProps> = (props) => {
  const [language, setLanguage] = useState<Language>(Language.yaml);
  const [stringifiedModel, setStringifiedModel] = useState<string>('');

  useEffect(() => {
    if (language === 'yaml') {
      setStringifiedModel(stringify(props.model, { indent: tabSize }));
    } else {
      setStringifiedModel(JSON.stringify(props.model, null, tabSize));
    }
  }, [props.model, language]);

  const onYamlClick = useCallback(() => {
    setLanguage(Language.yaml);
  }, []);
  const onJsonClick = useCallback(() => {
    setLanguage(Language.json);
  }, []);

  const onEditorDidMount: EditorDidMount = useCallback((editor, monaco) => {
    setTimeout(() => {
      monaco.editor.getModels()[0].updateOptions({
        tabSize,
        bracketColorizationOptions: { enabled: true, independentColorPoolPerBracketType: true },
      });
      editor.layout();
      editor.focus();

      editor.setPosition({ lineNumber: 1, column: 1 });
    }, 0);
  }, []);

  const customControls = [
    <CodeEditorControl
      icon={<CopyIcon />}
      key="Convert to YAML"
      aria-label="Convert to YAML"
      tooltipProps={{ content: 'Convert to YAML' }}
      onClick={onYamlClick}
      isVisible
    />,
    <CodeEditorControl
      icon={<JsIcon />}
      key="Convert to JSON"
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
          height="90vh"
        />
      </Card>
    </div>
  );
};
