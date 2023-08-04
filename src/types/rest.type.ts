/**
 * The name of the Camel component to use as the REST API. If no API Component has been explicit configured, then Camel will lookup if there is a Camel component responsible for servicing and generating the REST API documentation, or if a org.apache.camel.spi.RestApiProcessorFactory is registered in the registry. If either one is found, then that is being used.
 */
export type ApiComponent = "openapi" | "swagger"
/**
 * Sets a leading API context-path the REST API services will be using. This can be used when using components such as camel-servlet where the deployed web application is deployed using a context-path.
 */
export type ApiContextPath = string
/**
 * Sets the route id to use for the route that services the REST API. The route will by default use an auto assigned route id.
 */
export type ApiContextRouteId = string
/**
 * To use a specific hostname for the API documentation (such as swagger or openapi) This can be used to override the generated host with this configured hostname
 */
export type ApiHost = string
/**
 * Property key
 */
export type Key = string
/**
 * Property value
 */
export type Value = string
/**
 * Allows to configure as many additional properties for the api documentation. For example set property api.title to my cool stuff
 */
export type ApiProperty = RestProperty[]
/**
 * Whether vendor extension is enabled in the Rest APIs. If enabled then Camel will include additional information as vendor extension (eg keys starting with x-) such as route ids, class names etc. Not all 3rd party API gateways and tools supports vendor-extensions when importing your API docs.
 */
export type ApiVendorExtension = boolean
/**
 * Sets the binding mode to use. The default value is off
 */
export type BindingMode = "auto" | "json" | "json_xml" | "off" | "xml"
/**
 * Whether to enable validation of the client request to check: 1) Content-Type header matches what the Rest DSL consumes; returns HTTP Status 415 if validation error. 2) Accept header matches what the Rest DSL produces; returns HTTP Status 406 if validation error. 3) Missing required data (query parameters, HTTP headers, body); returns HTTP Status 400 if validation error. 4) Parsing error of the message body (JSon, XML or Auto binding mode must be enabled); returns HTTP Status 400 if validation error.
 */
export type ClientRequestValidation = boolean
/**
 * The Camel Rest component to use for the REST transport (consumer), such as netty-http, jetty, servlet, undertow. If no component has been explicit configured, then Camel will lookup if there is a Camel component that integrates with the Rest DSL, or if a org.apache.camel.spi.RestConsumerFactory is registered in the registry. If either one is found, then that is being used.
 */
export type Component =
  | "platform-http"
  | "servlet"
  | "jetty"
  | "undertow"
  | "netty-http"
  | "coap"
/**
 * Allows to configure as many additional properties for the rest component in use.
 */
export type ComponentProperty = RestProperty[]
/**
 * Allows to configure as many additional properties for the rest consumer in use.
 */
export type ConsumerProperty = RestProperty[]
/**
 * Sets a leading context-path the REST services will be using. This can be used when using components such as camel-servlet where the deployed web application is deployed using a context-path. Or for components such as camel-jetty or camel-netty-http that includes a HTTP server.
 */
export type ContextPath = string
/**
 * Allows to configure custom CORS headers.
 */
export type CorsHeaders = RestProperty[]
/**
 * Allows to configure as many additional properties for the data formats in use. For example set property prettyPrint to true to have json outputted in pretty mode. The properties can be prefixed to denote the option is only for either JSON or XML and for either the IN or the OUT. The prefixes are: json.in. json.out. xml.in. xml.out. For example a key with value xml.out.mustBeJAXBElement is only for the XML data format for the outgoing. A key without a prefix is a common key for all situations.
 */
export type DataFormatProperty = RestProperty[]
/**
 * Allows to configure as many additional properties for the rest endpoint in use.
 */
export type EndpointProperty = RestProperty[]
/**
 * The hostname to use for exposing the REST service.
 */
export type Host = string
/**
 * If no hostname has been explicit configured, then this resolver is used to compute the hostname the REST service will be using.
 */
export type HostNameResolver = "allLocalIp" | "localHostName" | "localIp"
/**
 * Inline routes in rest-dsl which are linked using direct endpoints. By default, each service in Rest DSL is an individual route, meaning that you would have at least two routes per service (rest-dsl, and the route linked from rest-dsl). Enabling this allows Camel to optimize and inline this as a single route, however this requires to use direct endpoints, which must be unique per service. This option is default false.
 */
export type InlineRoutes = boolean
/**
 * Name of specific json data format to use. By default jackson will be used. Important: This option is only for setting a custom name of the data format, not to refer to an existing data format instance.
 */
export type JsonDataFormat = string
/**
 * The port number to use for exposing the REST service. Notice if you use servlet component then the port number configured here does not apply, as the port number in use is the actual port number the servlet component is using. eg if using Apache Tomcat its the tomcat http port, if using Apache Karaf its the HTTP service in Karaf that uses port 8181 by default etc. Though in those situations setting the port number here, allows tooling and JMX to know the port number, so its recommended to set the port number to the number that the servlet engine uses.
 */
export type Port = string
/**
 * Sets the location of the api document the REST producer will use to validate the REST uri and query parameters are valid accordingly to the api document. The location of the api document is loaded from classpath by default, but you can use file: or http: to refer to resources to load from file or http url.
 */
export type ProducerApiDoc = string
/**
 * Sets the name of the Camel component to use as the REST producer
 */
export type ProducerComponent =
  | "vertx-http"
  | "http"
  | "undertow"
  | "netty-http"
/**
 * The scheme to use for exposing the REST service. Usually http or https is supported. The default value is http
 */
export type Scheme = string
/**
 * Whether to skip binding on output if there is a custom HTTP error code header. This allows to build custom error messages that do not bind to json / xml etc, as success messages otherwise will do.
 */
export type SkipBindingOnErrorCode = boolean
/**
 * Whether to use X-Forward headers for Host and related setting. The default value is true.
 */
export type UseXForwardHeaders = boolean
/**
 * Name of specific XML data format to use. By default jaxb will be used. Important: This option is only for setting a custom name of the data format, not to refer to an existing data format instance.
 */
export type XmlDataFormat = string
/**
 * Whether to include or exclude this rest operation in API documentation. This option will override what may be configured on a parent level. The default value is true.
 */
export type ApiDocs = boolean
/**
 * Sets the binding mode to use. This option will override what may be configured on a parent level The default value is auto
 */
export type BindingMode1 = "off" | "auto" | "json" | "xml" | "json_xml"
/**
 * Whether to enable validation of the client request to check: 1) Content-Type header matches what the Rest DSL consumes; returns HTTP Status 415 if validation error. 2) Accept header matches what the Rest DSL produces; returns HTTP Status 406 if validation error. 3) Missing required data (query parameters, HTTP headers, body); returns HTTP Status 400 if validation error. 4) Parsing error of the message body (JSon, XML or Auto binding mode must be enabled); returns HTTP Status 400 if validation error.
 */
export type ClientRequestValidation1 = boolean
/**
 * To define the content type what the REST service consumes (accept as input), such as application/xml or application/json. This option will override what may be configured on a parent level
 */
export type Consumes = string
/**
 * Whether to include or exclude this rest operation in API documentation. The default value is true.
 */
export type ApiDocs1 = boolean
/**
 * Sets the binding mode to use. This option will override what may be configured on a parent level The default value is off
 */
export type BindingMode2 = "off" | "auto" | "json" | "xml" | "json_xml"
/**
 * Whether to enable validation of the client request to check: 1) Content-Type header matches what the Rest DSL consumes; returns HTTP Status 415 if validation error. 2) Accept header matches what the Rest DSL produces; returns HTTP Status 406 if validation error. 3) Missing required data (query parameters, HTTP headers, body); returns HTTP Status 400 if validation error. 4) Parsing error of the message body (JSon, XML or Auto binding mode must be enabled); returns HTTP Status 400 if validation error.
 */
export type ClientRequestValidation2 = boolean
/**
 * To define the content type what the REST service consumes (accept as input), such as application/xml or application/json. This option will override what may be configured on a parent level
 */
export type Consumes1 = string
/**
 * Marks this rest operation as deprecated in OpenApi documentation.
 */
export type Deprecated = boolean
/**
 * Whether to disable this REST service from the route during build time. Once an REST service has been disabled then it cannot be enabled later at runtime.
 */
export type Disabled = boolean
/**
 * Sets the class name to use for binding from POJO to output for the outgoing data This option will override what may be configured on a parent level The name of the class of the input data. Append a to the end of the name if you want the input to be an array type.
 */
export type OutType = string
/**
 * A single value
 */
export type Value1 =
  | string
  | {
      value?: Value2
      [k: string]: unknown
    }
/**
 * Property value
 */
export type Value2 = string
/**
 * Sets the parameter list of allowable values (enum).
 */
export type AllowableValues = Value1[]
/**
 * Sets the parameter array type. Required if data type is array. Describes the type of items in the array.
 */
export type ArrayType = string
/**
 * Sets the parameter collection format.
 */
export type CollectionFormat = "csv" | "multi" | "pipes" | "ssv" | "tsv"
/**
 * Sets the parameter data format.
 */
export type DataFormat = string
/**
 * Sets the parameter data type.
 */
export type DataType = string
/**
 * Sets the parameter default value.
 */
export type DefaultValue = string
/**
 * Sets the parameter description.
 */
export type Description = string
/**
 * Sets the parameter examples.
 */
export type Examples = RestProperty[]
/**
 * Sets the parameter name.
 */
export type Name = string
/**
 * Sets the parameter required flag.
 */
export type Required = boolean
/**
 * Sets the parameter type.
 */
export type Type = "body" | "formData" | "header" | "path" | "query"
/**
 * The path mapping URIs of this REST operation such as /{id}.
 */
export type Path = string
/**
 * To define the content type what the REST service produces (uses for output), such as application/xml or application/json This option will override what may be configured on a parent level
 */
export type Produces = string
/**
 * The response code such as a HTTP status code
 */
export type Code = string
/**
 * Examples of response messages
 */
export type Examples1 = RestProperty[]
/**
 * Sets the parameter list of allowable values.
 */
export type AllowableValues1 = Value1[]
/**
 * Sets the parameter array type. Required if data type is array. Describes the type of items in the array.
 */
export type ArrayType1 = string
/**
 * Sets the parameter collection format.
 */
export type CollectionFormat1 = "csv" | "multi" | "pipes" | "ssv" | "tsv"
/**
 * Sets the parameter data format.
 */
export type DataFormat1 = string
/**
 * Sets the header data type.
 */
export type DataType1 = string
/**
 * Description of the parameter.
 */
export type Description1 = string
/**
 * Sets the example
 */
export type Example = string
/**
 * Name of the parameter. This option is mandatory.
 */
export type Name1 = string
/**
 * Adds a response header
 */
export type Header = ResponseHeader[]
/**
 * The response message (description)
 */
export type Message = string
/**
 * The response model
 */
export type ResponseModel = string
/**
 * Sets the id of the route
 */
export type RouteId = string
/**
 * Key used to refer to this security definition
 */
export type Key1 = string
/**
 * The scopes to allow (separate multiple scopes by comma)
 */
export type Scopes = string
/**
 * Whether to skip binding on output if there is a custom HTTP error code header. This allows to build custom error messages that do not bind to json / xml etc, as success messages otherwise will do. This option will override what may be configured on a parent level
 */
export type SkipBindingOnErrorCode1 = boolean
/**
 * Sends the message to a static endpoint
 */
export type To =
  | string
  | {
      description?: string
      disabled?: Disabled1
      id?: string
      inheritErrorHandler?: boolean
      parameters?: {
        [k: string]: unknown
      }
      pattern?: Pattern
      uri?: Uri
      [k: string]: unknown
    }
/**
 * Whether to disable this EIP from the route during build time. Once an EIP has been disabled then it cannot be enabled later at runtime.
 */
export type Disabled1 = boolean
/**
 * Sets the optional ExchangePattern used to invoke this endpoint
 */
export type Pattern = "InOnly" | "InOut"
/**
 * Sets the uri of the endpoint to send to.
 */
export type Uri = string
/**
 * Sets the class name to use for binding from input to POJO for the incoming data This option will override what may be configured on a parent level. The name of the class of the input data. Append a to the end of the name if you want the input to be an array type.
 */
export type Type1 = string
/**
 * Whether to disable this REST service from the route during build time. Once an REST service has been disabled then it cannot be enabled later at runtime.
 */
export type Disabled2 = boolean
/**
 * Whether to include or exclude this rest operation in API documentation. The default value is true.
 */
export type ApiDocs2 = boolean
/**
 * Sets the binding mode to use. This option will override what may be configured on a parent level The default value is off
 */
export type BindingMode3 = "off" | "auto" | "json" | "xml" | "json_xml"
/**
 * Whether to enable validation of the client request to check: 1) Content-Type header matches what the Rest DSL consumes; returns HTTP Status 415 if validation error. 2) Accept header matches what the Rest DSL produces; returns HTTP Status 406 if validation error. 3) Missing required data (query parameters, HTTP headers, body); returns HTTP Status 400 if validation error. 4) Parsing error of the message body (JSon, XML or Auto binding mode must be enabled); returns HTTP Status 400 if validation error.
 */
export type ClientRequestValidation3 = boolean
/**
 * To define the content type what the REST service consumes (accept as input), such as application/xml or application/json. This option will override what may be configured on a parent level
 */
export type Consumes2 = string
/**
 * Marks this rest operation as deprecated in OpenApi documentation.
 */
export type Deprecated1 = boolean
/**
 * Whether to disable this REST service from the route during build time. Once an REST service has been disabled then it cannot be enabled later at runtime.
 */
export type Disabled3 = boolean
/**
 * Sets the class name to use for binding from POJO to output for the outgoing data This option will override what may be configured on a parent level The name of the class of the input data. Append a to the end of the name if you want the input to be an array type.
 */
export type OutType1 = string
/**
 * The path mapping URIs of this REST operation such as /{id}.
 */
export type Path1 = string
/**
 * To define the content type what the REST service produces (uses for output), such as application/xml or application/json This option will override what may be configured on a parent level
 */
export type Produces1 = string
/**
 * Sets the id of the route
 */
export type RouteId1 = string
/**
 * Whether to skip binding on output if there is a custom HTTP error code header. This allows to build custom error messages that do not bind to json / xml etc, as success messages otherwise will do. This option will override what may be configured on a parent level
 */
export type SkipBindingOnErrorCode2 = boolean
/**
 * Sends the message to a static endpoint
 */
export type To1 =
  | string
  | {
      description?: string
      disabled?: Disabled1
      id?: string
      inheritErrorHandler?: boolean
      parameters?: {
        [k: string]: unknown
      }
      pattern?: Pattern
      uri?: Uri
      [k: string]: unknown
    }
/**
 * Sets the class name to use for binding from input to POJO for the incoming data This option will override what may be configured on a parent level. The name of the class of the input data. Append a to the end of the name if you want the input to be an array type.
 */
export type Type2 = string
/**
 * Whether to include or exclude this rest operation in API documentation. The default value is true.
 */
export type ApiDocs3 = boolean
/**
 * Sets the binding mode to use. This option will override what may be configured on a parent level The default value is off
 */
export type BindingMode4 = "off" | "auto" | "json" | "xml" | "json_xml"
/**
 * Whether to enable validation of the client request to check: 1) Content-Type header matches what the Rest DSL consumes; returns HTTP Status 415 if validation error. 2) Accept header matches what the Rest DSL produces; returns HTTP Status 406 if validation error. 3) Missing required data (query parameters, HTTP headers, body); returns HTTP Status 400 if validation error. 4) Parsing error of the message body (JSon, XML or Auto binding mode must be enabled); returns HTTP Status 400 if validation error.
 */
export type ClientRequestValidation4 = boolean
/**
 * To define the content type what the REST service consumes (accept as input), such as application/xml or application/json. This option will override what may be configured on a parent level
 */
export type Consumes3 = string
/**
 * Marks this rest operation as deprecated in OpenApi documentation.
 */
export type Deprecated2 = boolean
/**
 * Whether to disable this REST service from the route during build time. Once an REST service has been disabled then it cannot be enabled later at runtime.
 */
export type Disabled4 = boolean
/**
 * Sets the class name to use for binding from POJO to output for the outgoing data This option will override what may be configured on a parent level The name of the class of the input data. Append a to the end of the name if you want the input to be an array type.
 */
export type OutType2 = string
/**
 * The path mapping URIs of this REST operation such as /{id}.
 */
export type Path2 = string
/**
 * To define the content type what the REST service produces (uses for output), such as application/xml or application/json This option will override what may be configured on a parent level
 */
export type Produces2 = string
/**
 * Sets the id of the route
 */
export type RouteId2 = string
/**
 * Whether to skip binding on output if there is a custom HTTP error code header. This allows to build custom error messages that do not bind to json / xml etc, as success messages otherwise will do. This option will override what may be configured on a parent level
 */
export type SkipBindingOnErrorCode3 = boolean
/**
 * Sends the message to a static endpoint
 */
export type To2 =
  | string
  | {
      description?: string
      disabled?: Disabled1
      id?: string
      inheritErrorHandler?: boolean
      parameters?: {
        [k: string]: unknown
      }
      pattern?: Pattern
      uri?: Uri
      [k: string]: unknown
    }
/**
 * Sets the class name to use for binding from input to POJO for the incoming data This option will override what may be configured on a parent level. The name of the class of the input data. Append a to the end of the name if you want the input to be an array type.
 */
export type Type3 = string
/**
 * Whether to include or exclude this rest operation in API documentation. The default value is true.
 */
export type ApiDocs4 = boolean
/**
 * Sets the binding mode to use. This option will override what may be configured on a parent level The default value is off
 */
export type BindingMode5 = "off" | "auto" | "json" | "xml" | "json_xml"
/**
 * Whether to enable validation of the client request to check: 1) Content-Type header matches what the Rest DSL consumes; returns HTTP Status 415 if validation error. 2) Accept header matches what the Rest DSL produces; returns HTTP Status 406 if validation error. 3) Missing required data (query parameters, HTTP headers, body); returns HTTP Status 400 if validation error. 4) Parsing error of the message body (JSon, XML or Auto binding mode must be enabled); returns HTTP Status 400 if validation error.
 */
export type ClientRequestValidation5 = boolean
/**
 * To define the content type what the REST service consumes (accept as input), such as application/xml or application/json. This option will override what may be configured on a parent level
 */
export type Consumes4 = string
/**
 * Marks this rest operation as deprecated in OpenApi documentation.
 */
export type Deprecated3 = boolean
/**
 * Whether to disable this REST service from the route during build time. Once an REST service has been disabled then it cannot be enabled later at runtime.
 */
export type Disabled5 = boolean
/**
 * Sets the class name to use for binding from POJO to output for the outgoing data This option will override what may be configured on a parent level The name of the class of the input data. Append a to the end of the name if you want the input to be an array type.
 */
export type OutType3 = string
/**
 * The path mapping URIs of this REST operation such as /{id}.
 */
export type Path3 = string
/**
 * To define the content type what the REST service produces (uses for output), such as application/xml or application/json This option will override what may be configured on a parent level
 */
export type Produces3 = string
/**
 * Sets the id of the route
 */
export type RouteId3 = string
/**
 * Whether to skip binding on output if there is a custom HTTP error code header. This allows to build custom error messages that do not bind to json / xml etc, as success messages otherwise will do. This option will override what may be configured on a parent level
 */
export type SkipBindingOnErrorCode4 = boolean
/**
 * Sends the message to a static endpoint
 */
export type To3 =
  | string
  | {
      description?: string
      disabled?: Disabled1
      id?: string
      inheritErrorHandler?: boolean
      parameters?: {
        [k: string]: unknown
      }
      pattern?: Pattern
      uri?: Uri
      [k: string]: unknown
    }
/**
 * Sets the class name to use for binding from input to POJO for the incoming data This option will override what may be configured on a parent level. The name of the class of the input data. Append a to the end of the name if you want the input to be an array type.
 */
export type Type4 = string
/**
 * Path of the rest service, such as /foo
 */
export type Path4 = string
/**
 * Whether to include or exclude this rest operation in API documentation. The default value is true.
 */
export type ApiDocs5 = boolean
/**
 * Sets the binding mode to use. This option will override what may be configured on a parent level The default value is off
 */
export type BindingMode6 = "off" | "auto" | "json" | "xml" | "json_xml"
/**
 * Whether to enable validation of the client request to check: 1) Content-Type header matches what the Rest DSL consumes; returns HTTP Status 415 if validation error. 2) Accept header matches what the Rest DSL produces; returns HTTP Status 406 if validation error. 3) Missing required data (query parameters, HTTP headers, body); returns HTTP Status 400 if validation error. 4) Parsing error of the message body (JSon, XML or Auto binding mode must be enabled); returns HTTP Status 400 if validation error.
 */
export type ClientRequestValidation6 = boolean
/**
 * To define the content type what the REST service consumes (accept as input), such as application/xml or application/json. This option will override what may be configured on a parent level
 */
export type Consumes5 = string
/**
 * Marks this rest operation as deprecated in OpenApi documentation.
 */
export type Deprecated4 = boolean
/**
 * Whether to disable this REST service from the route during build time. Once an REST service has been disabled then it cannot be enabled later at runtime.
 */
export type Disabled6 = boolean
/**
 * Sets the class name to use for binding from POJO to output for the outgoing data This option will override what may be configured on a parent level The name of the class of the input data. Append a to the end of the name if you want the input to be an array type.
 */
export type OutType4 = string
/**
 * The path mapping URIs of this REST operation such as /{id}.
 */
export type Path5 = string
/**
 * To define the content type what the REST service produces (uses for output), such as application/xml or application/json This option will override what may be configured on a parent level
 */
export type Produces4 = string
/**
 * Sets the id of the route
 */
export type RouteId4 = string
/**
 * Whether to skip binding on output if there is a custom HTTP error code header. This allows to build custom error messages that do not bind to json / xml etc, as success messages otherwise will do. This option will override what may be configured on a parent level
 */
export type SkipBindingOnErrorCode5 = boolean
/**
 * Sends the message to a static endpoint
 */
export type To4 =
  | string
  | {
      description?: string
      disabled?: Disabled1
      id?: string
      inheritErrorHandler?: boolean
      parameters?: {
        [k: string]: unknown
      }
      pattern?: Pattern
      uri?: Uri
      [k: string]: unknown
    }
/**
 * Sets the class name to use for binding from input to POJO for the incoming data This option will override what may be configured on a parent level. The name of the class of the input data. Append a to the end of the name if you want the input to be an array type.
 */
export type Type5 = string
/**
 * To define the content type what the REST service produces (uses for output), such as application/xml or application/json This option will override what may be configured on a parent level
 */
export type Produces5 = string
/**
 * Whether to include or exclude this rest operation in API documentation. The default value is true.
 */
export type ApiDocs6 = boolean
/**
 * Sets the binding mode to use. This option will override what may be configured on a parent level The default value is off
 */
export type BindingMode7 = "off" | "auto" | "json" | "xml" | "json_xml"
/**
 * Whether to enable validation of the client request to check: 1) Content-Type header matches what the Rest DSL consumes; returns HTTP Status 415 if validation error. 2) Accept header matches what the Rest DSL produces; returns HTTP Status 406 if validation error. 3) Missing required data (query parameters, HTTP headers, body); returns HTTP Status 400 if validation error. 4) Parsing error of the message body (JSon, XML or Auto binding mode must be enabled); returns HTTP Status 400 if validation error.
 */
export type ClientRequestValidation7 = boolean
/**
 * To define the content type what the REST service consumes (accept as input), such as application/xml or application/json. This option will override what may be configured on a parent level
 */
export type Consumes6 = string
/**
 * Marks this rest operation as deprecated in OpenApi documentation.
 */
export type Deprecated5 = boolean
/**
 * Whether to disable this REST service from the route during build time. Once an REST service has been disabled then it cannot be enabled later at runtime.
 */
export type Disabled7 = boolean
/**
 * Sets the class name to use for binding from POJO to output for the outgoing data This option will override what may be configured on a parent level The name of the class of the input data. Append a to the end of the name if you want the input to be an array type.
 */
export type OutType5 = string
/**
 * The path mapping URIs of this REST operation such as /{id}.
 */
export type Path6 = string
/**
 * To define the content type what the REST service produces (uses for output), such as application/xml or application/json This option will override what may be configured on a parent level
 */
export type Produces6 = string
/**
 * Sets the id of the route
 */
export type RouteId5 = string
/**
 * Whether to skip binding on output if there is a custom HTTP error code header. This allows to build custom error messages that do not bind to json / xml etc, as success messages otherwise will do. This option will override what may be configured on a parent level
 */
export type SkipBindingOnErrorCode6 = boolean
/**
 * Sends the message to a static endpoint
 */
export type To5 =
  | string
  | {
      description?: string
      disabled?: Disabled1
      id?: string
      inheritErrorHandler?: boolean
      parameters?: {
        [k: string]: unknown
      }
      pattern?: Pattern
      uri?: Uri
      [k: string]: unknown
    }
/**
 * Sets the class name to use for binding from input to POJO for the incoming data This option will override what may be configured on a parent level. The name of the class of the input data. Append a to the end of the name if you want the input to be an array type.
 */
export type Type6 = string
/**
 * A short description for security scheme.
 */
export type Description2 = string
/**
 * To use a cookie as the location of the API key.
 */
export type InCookie = boolean
/**
 * To use header as the location of the API key.
 */
export type InHeader = boolean
/**
 * To use query parameter as the location of the API key.
 */
export type InQuery = boolean
/**
 * Key used to refer to this security definition
 */
export type Key2 = string
/**
 * The name of the header or query parameter to be used.
 */
export type Name2 = string
/**
 * A short description for security scheme.
 */
export type Description3 = string
/**
 * Key used to refer to this security definition
 */
export type Key3 = string
/**
 * A short description for security scheme.
 */
export type Description4 = string
/**
 * A hint to the client to identify how the bearer token is formatted.
 */
export type Format = string
/**
 * Key used to refer to this security definition
 */
export type Key4 = string
/**
 * A short description for security scheme.
 */
export type Description5 = string
/**
 * Key used to refer to this security definition
 */
export type Key5 = string
/**
 * The authorization URL to be used for this flow. This SHOULD be in the form of a URL. Required for implicit and access code flows
 */
export type AuthorizationUrl = string
/**
 * A short description for security scheme.
 */
export type Description6 = string
/**
 * The flow used by the OAuth2 security scheme. Valid values are implicit, password, application or accessCode.
 */
export type Flow =
  | "implicit"
  | "password"
  | "application"
  | "clientCredentials"
  | "accessCode"
  | "authorizationCode"
/**
 * Key used to refer to this security definition
 */
export type Key6 = string
/**
 * The URL to be used for obtaining refresh tokens. This MUST be in the form of a URL.
 */
export type RefreshUrl = string
/**
 * The available scopes for an OAuth2 security scheme
 */
export type Scopes1 = RestProperty[]
/**
 * The token URL to be used for this flow. This SHOULD be in the form of a URL. Required for password, application, and access code flows.
 */
export type TokenUrl = string
/**
 * A short description for security scheme.
 */
export type Description7 = string
/**
 * Key used to refer to this security definition
 */
export type Key7 = string
/**
 * OpenId Connect URL to discover OAuth2 configuration values.
 */
export type Url = string
/**
 * Sets the security requirement(s) for all endpoints.
 */
export type SecurityRequirements = RestSecurity[]
/**
 * Whether to skip binding on output if there is a custom HTTP error code header. This allows to build custom error messages that do not bind to json / xml etc, as success messages otherwise will do. This option will override what may be configured on a parent level
 */
export type SkipBindingOnErrorCode7 = boolean
/**
 * To configure a special tag for the operations within this rest definition.
 */
export type Tag = string
export type MySchema = {
  restConfiguration?: RestConfiguration
  rest?: Rest
  [k: string]: unknown
}[]

/**
 * To configure rest
 */
export interface RestConfiguration {
  apiComponent?: ApiComponent
  apiContextPath?: ApiContextPath
  apiContextRouteId?: ApiContextRouteId
  apiHost?: ApiHost
  apiProperty?: ApiProperty
  apiVendorExtension?: ApiVendorExtension
  bindingMode?: BindingMode
  clientRequestValidation?: ClientRequestValidation
  component?: Component
  componentProperty?: ComponentProperty
  consumerProperty?: ConsumerProperty
  contextPath?: ContextPath
  corsHeaders?: CorsHeaders
  dataFormatProperty?: DataFormatProperty
  enableCors?: boolean
  endpointProperty?: EndpointProperty
  host?: Host
  hostNameResolver?: HostNameResolver
  inlineRoutes?: InlineRoutes
  jsonDataFormat?: JsonDataFormat
  port?: Port
  producerApiDoc?: ProducerApiDoc
  producerComponent?: ProducerComponent
  scheme?: Scheme
  skipBindingOnErrorCode?: SkipBindingOnErrorCode
  useXForwardHeaders?: UseXForwardHeaders
  xmlDataFormat?: XmlDataFormat
  [k: string]: unknown
}
/**
 * A key value pair
 */
export interface RestProperty {
  key: Key
  value: Value
  [k: string]: unknown
}
/**
 * Defines a rest service using the rest-dsl
 */
export interface Rest {
  apiDocs?: ApiDocs
  bindingMode?: BindingMode1
  clientRequestValidation?: ClientRequestValidation1
  consumes?: Consumes
  delete?: Delete[]
  description?: string
  disabled?: Disabled2
  enableCors?: boolean
  get?: Get[]
  head?: Head[]
  id?: string
  patch?: Patch[]
  path?: Path4
  post?: Post[]
  produces?: Produces5
  put?: Put[]
  securityDefinitions?: SecurityDefinitions
  securityRequirements?: SecurityRequirements
  skipBindingOnErrorCode?: SkipBindingOnErrorCode7
  tag?: Tag
  [k: string]: unknown
}
/**
 * Rest DELETE command
 */
export interface Delete {
  apiDocs?: ApiDocs1
  bindingMode?: BindingMode2
  clientRequestValidation?: ClientRequestValidation2
  consumes?: Consumes1
  deprecated?: Deprecated
  description?: string
  disabled?: Disabled
  enableCors?: boolean
  id?: string
  outType?: OutType
  param?: Param[]
  path?: Path
  produces?: Produces
  responseMessage?: ResponseMessage[]
  routeId?: RouteId
  security?: RestSecurity[]
  skipBindingOnErrorCode?: SkipBindingOnErrorCode1
  to?: To
  type?: Type1
  [k: string]: unknown
}
/**
 * To specify the rest operation parameters.
 */
export interface Param {
  allowableValues?: AllowableValues
  arrayType?: ArrayType
  collectionFormat?: CollectionFormat
  dataFormat?: DataFormat
  dataType?: DataType
  defaultValue?: DefaultValue
  description?: Description
  examples?: Examples
  name: Name
  required?: Required
  type?: Type
  [k: string]: unknown
}
/**
 * To specify the rest operation response messages.
 */
export interface ResponseMessage {
  code?: Code
  examples?: Examples1
  header?: Header
  message: Message
  responseModel?: ResponseModel
  [k: string]: unknown
}
/**
 * To specify the rest operation response headers.
 */
export interface ResponseHeader {
  allowableValues?: AllowableValues1
  arrayType?: ArrayType1
  collectionFormat?: CollectionFormat1
  dataFormat?: DataFormat1
  dataType?: DataType1
  description?: Description1
  example?: Example
  name: Name1
  [k: string]: unknown
}
/**
 * Rest security definition
 */
export interface RestSecurity {
  key: Key1
  scopes?: Scopes
  [k: string]: unknown
}
/**
 * Rest GET command
 */
export interface Get {
  apiDocs?: ApiDocs2
  bindingMode?: BindingMode3
  clientRequestValidation?: ClientRequestValidation3
  consumes?: Consumes2
  deprecated?: Deprecated1
  description?: string
  disabled?: Disabled3
  enableCors?: boolean
  id?: string
  outType?: OutType1
  param?: Param[]
  path?: Path1
  produces?: Produces1
  responseMessage?: ResponseMessage[]
  routeId?: RouteId1
  security?: RestSecurity[]
  skipBindingOnErrorCode?: SkipBindingOnErrorCode2
  to?: To1
  type?: Type2
  [k: string]: unknown
}
/**
 * Rest HEAD command
 */
export interface Head {
  apiDocs?: ApiDocs3
  bindingMode?: BindingMode4
  clientRequestValidation?: ClientRequestValidation4
  consumes?: Consumes3
  deprecated?: Deprecated2
  description?: string
  disabled?: Disabled4
  enableCors?: boolean
  id?: string
  outType?: OutType2
  param?: Param[]
  path?: Path2
  produces?: Produces2
  responseMessage?: ResponseMessage[]
  routeId?: RouteId2
  security?: RestSecurity[]
  skipBindingOnErrorCode?: SkipBindingOnErrorCode3
  to?: To2
  type?: Type3
  [k: string]: unknown
}
/**
 * Rest PATCH command
 */
export interface Patch {
  apiDocs?: ApiDocs4
  bindingMode?: BindingMode5
  clientRequestValidation?: ClientRequestValidation5
  consumes?: Consumes4
  deprecated?: Deprecated3
  description?: string
  disabled?: Disabled5
  enableCors?: boolean
  id?: string
  outType?: OutType3
  param?: Param[]
  path?: Path3
  produces?: Produces3
  responseMessage?: ResponseMessage[]
  routeId?: RouteId3
  security?: RestSecurity[]
  skipBindingOnErrorCode?: SkipBindingOnErrorCode4
  to?: To3
  type?: Type4
  [k: string]: unknown
}
/**
 * Rest POST command
 */
export interface Post {
  apiDocs?: ApiDocs5
  bindingMode?: BindingMode6
  clientRequestValidation?: ClientRequestValidation6
  consumes?: Consumes5
  deprecated?: Deprecated4
  description?: string
  disabled?: Disabled6
  enableCors?: boolean
  id?: string
  outType?: OutType4
  param?: Param[]
  path?: Path5
  produces?: Produces4
  responseMessage?: ResponseMessage[]
  routeId?: RouteId4
  security?: RestSecurity[]
  skipBindingOnErrorCode?: SkipBindingOnErrorCode5
  to?: To4
  type?: Type5
  [k: string]: unknown
}
/**
 * Rest PUT command
 */
export interface Put {
  apiDocs?: ApiDocs6
  bindingMode?: BindingMode7
  clientRequestValidation?: ClientRequestValidation7
  consumes?: Consumes6
  deprecated?: Deprecated5
  description?: string
  disabled?: Disabled7
  enableCors?: boolean
  id?: string
  outType?: OutType5
  param?: Param[]
  path?: Path6
  produces?: Produces6
  responseMessage?: ResponseMessage[]
  routeId?: RouteId5
  security?: RestSecurity[]
  skipBindingOnErrorCode?: SkipBindingOnErrorCode6
  to?: To5
  type?: Type6
  [k: string]: unknown
}
/**
 * Sets the security definitions such as Basic, OAuth2 etc.
 */
export interface SecurityDefinitions {
  apiKey?: ApiKey
  basicAuth?: BasicAuth
  bearer?: BearerToken
  mutualTls?: MutualTLS
  oauth2?: Oauth2
  openIdConnect?: OpenIdConnect
  [k: string]: unknown
}
/**
 * Rest security basic auth definition
 */
export interface ApiKey {
  description?: Description2
  inCookie?: InCookie
  inHeader?: InHeader
  inQuery?: InQuery
  key: Key2
  name: Name2
  [k: string]: unknown
}
/**
 * Rest security basic auth definition
 */
export interface BasicAuth {
  description?: Description3
  key: Key3
  [k: string]: unknown
}
/**
 * Rest security bearer token authentication definition
 */
export interface BearerToken {
  description?: Description4
  format?: Format
  key: Key4
  [k: string]: unknown
}
/**
 * Rest security mutual TLS authentication definition
 */
export interface MutualTLS {
  description?: Description5
  key: Key5
  [k: string]: unknown
}
/**
 * Rest security OAuth2 definition
 */
export interface Oauth2 {
  authorizationUrl?: AuthorizationUrl
  description?: Description6
  flow?: Flow
  key: Key6
  refreshUrl?: RefreshUrl
  scopes?: Scopes1
  tokenUrl?: TokenUrl
  [k: string]: unknown
}
/**
 * Rest security OpenID Connect definition
 */
export interface OpenIdConnect {
  description?: Description7
  key: Key7
  url: Url
  [k: string]: unknown
}
