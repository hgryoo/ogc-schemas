var WPS_2_0_Module_Factory = function () {
  var WPS_2_0 = {
    n: 'WPS_2_0',
    dens: 'http:\/\/www.opengis.net\/wps\/2.0.0',
    deps: ['OWS_2_0', 'OWS_2_0', 'OWS_2_0', 'OWS_2_0', 'OWS_2_0', 'OWS_2_0', 'OWS_2_0', 'OWS_2_0', 'OWS_2_0'],
    tis: [{
        ln: 'Data',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            col: true,
            typed: false,
            t: 'ae'
          }, {
            n: 'mimeType',
            an: {
              lp: 'mimeType'
            },
            t: 'a'
          }, {
            n: 'encoding',
            an: {
              lp: 'encoding'
            },
            t: 'a'
          }, {
            n: 'schema',
            an: {
              lp: 'schema'
            },
            t: 'a'
          }]
      }, {
        ln: 'Dismiss',
        bti: '.RequestBaseType',
        ps: [{
            n: 'jobID',
            en: 'JobID'
          }]
      }, {
        ln: 'GetCapabilitiesType',
        bti: 'OWS_2_0.GetCapabilitiesType',
        ps: [{
            n: 'service',
            an: {
              lp: 'service'
            },
            t: 'a'
          }]
      }, {
        ln: 'DataDescriptionType',
        ps: [{
            n: 'format',
            col: true,
            en: 'Format',
            ti: '.Format'
          }]
      }, {
        ln: 'DescribeProcess',
        bti: '.RequestBaseType',
        ps: [{
            n: 'identifier',
            col: true,
            en: {
              lp: 'Identifier',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.CodeType'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'OutputDefinitionType',
        ps: [{
            n: 'output',
            en: 'Output',
            ti: '.OutputDefinitionType'
          }, {
            n: 'id',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'transmission',
            an: {
              lp: 'transmission'
            },
            t: 'a'
          }, {
            n: 'mimeType',
            an: {
              lp: 'mimeType'
            },
            t: 'a'
          }, {
            n: 'encoding',
            an: {
              lp: 'encoding'
            },
            t: 'a'
          }, {
            n: 'schema',
            an: {
              lp: 'schema'
            },
            t: 'a'
          }]
      }, {
        ln: 'WPSCapabilitiesType.Extension',
        ps: [{
            n: 'any',
            col: true,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'RequestBaseType',
        ps: [{
            n: 'extension',
            col: true,
            en: 'Extension',
            ti: 'AnyType'
          }, {
            n: 'service',
            an: {
              lp: 'service'
            },
            t: 'a'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'ProcessSummaryType',
        bti: '.DescriptionType',
        ps: [{
            n: 'jobControlOptions',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'jobControlOptions'
            },
            t: 'a'
          }, {
            n: 'outputTransmission',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'outputTransmission'
            },
            t: 'a'
          }, {
            n: 'processVersion',
            an: {
              lp: 'processVersion'
            },
            t: 'a'
          }, {
            n: 'processModel',
            an: {
              lp: 'processModel'
            },
            t: 'a'
          }]
      }, {
        ln: 'WPSCapabilitiesType',
        bti: 'OWS_2_0.CapabilitiesBaseType',
        ps: [{
            n: 'contents',
            en: 'Contents',
            ti: '.Contents'
          }, {
            n: 'extension',
            en: 'Extension',
            ti: '.WPSCapabilitiesType.Extension'
          }, {
            n: 'service',
            an: {
              lp: 'service'
            },
            t: 'a'
          }]
      }, {
        ln: 'ComplexDataType',
        bti: '.DataDescriptionType',
        ps: [{
            n: 'any',
            col: true,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'ReferenceType',
        ps: [{
            n: 'body',
            en: 'Body',
            ti: 'AnyType'
          }, {
            n: 'bodyReference',
            en: 'BodyReference',
            ti: '.ReferenceType.BodyReference'
          }, {
            n: 'href',
            an: {
              lp: 'href',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'mimeType',
            an: {
              lp: 'mimeType'
            },
            t: 'a'
          }, {
            n: 'encoding',
            an: {
              lp: 'encoding'
            },
            t: 'a'
          }, {
            n: 'schema',
            an: {
              lp: 'schema'
            },
            t: 'a'
          }]
      }, {
        ln: 'OutputDescriptionType',
        bti: '.DescriptionType',
        ps: [{
            n: 'dataDescription',
            mx: false,
            dom: false,
            typed: false,
            en: 'DataDescription',
            ti: '.DataDescriptionType',
            t: 'er'
          }, {
            n: 'output',
            col: true,
            en: 'Output',
            ti: '.OutputDescriptionType'
          }]
      }, {
        ln: 'ProcessOfferings',
        ps: [{
            n: 'processOffering',
            col: true,
            en: 'ProcessOffering',
            ti: '.ProcessOffering'
          }]
      }, {
        ln: 'Format',
        ps: [{
            n: 'mimeType',
            an: {
              lp: 'mimeType'
            },
            t: 'a'
          }, {
            n: 'encoding',
            an: {
              lp: 'encoding'
            },
            t: 'a'
          }, {
            n: 'schema',
            an: {
              lp: 'schema'
            },
            t: 'a'
          }, {
            n: 'maximumMegabytes',
            ti: 'Integer',
            an: {
              lp: 'maximumMegabytes'
            },
            t: 'a'
          }, {
            n: '_default',
            ti: 'Boolean',
            an: {
              lp: 'default'
            },
            t: 'a'
          }]
      }, {
        ln: 'GetStatus',
        bti: '.RequestBaseType',
        ps: [{
            n: 'jobID',
            en: 'JobID'
          }]
      }, {
        ln: 'ReferenceType.BodyReference',
        ps: [{
            n: 'href',
            an: {
              lp: 'href',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }]
      }, {
        ln: 'LiteralDataType.LiteralDataDomain',
        bti: '.LiteralDataDomainType',
        ps: [{
            n: '_default',
            ti: 'Boolean',
            an: {
              lp: 'default'
            },
            t: 'a'
          }]
      }, {
        ln: 'InputDescriptionType',
        bti: '.DescriptionType',
        ps: [{
            n: 'dataDescription',
            mx: false,
            dom: false,
            typed: false,
            en: 'DataDescription',
            ti: '.DataDescriptionType',
            t: 'er'
          }, {
            n: 'input',
            col: true,
            en: 'Input',
            ti: '.InputDescriptionType'
          }, {
            n: 'minOccurs',
            ti: 'Integer',
            an: {
              lp: 'minOccurs'
            },
            t: 'a'
          }, {
            n: 'maxOccurs',
            an: {
              lp: 'maxOccurs'
            },
            t: 'a'
          }]
      }, {
        ln: 'LiteralDataDomainType',
        ps: [{
            n: 'allowedValues',
            en: {
              lp: 'AllowedValues',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.AllowedValues'
          }, {
            n: 'anyValue',
            en: {
              lp: 'AnyValue',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.AnyValue'
          }, {
            n: 'valuesReference',
            en: {
              lp: 'ValuesReference',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.ValuesReference'
          }, {
            n: 'dataType',
            en: {
              lp: 'DataType',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.DomainMetadataType'
          }, {
            n: 'uom',
            en: {
              lp: 'UOM',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.DomainMetadataType'
          }, {
            n: 'defaultValue',
            en: {
              lp: 'DefaultValue',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.ValueType'
          }]
      }, {
        ln: 'LiteralValue',
        bti: 'OWS_2_0.ValueType',
        ps: [{
            n: 'dataType',
            an: {
              lp: 'dataType'
            },
            t: 'a'
          }, {
            n: 'uom',
            an: {
              lp: 'uom'
            },
            t: 'a'
          }]
      }, {
        ln: 'Result',
        ps: [{
            n: 'jobID',
            en: 'JobID'
          }, {
            n: 'expirationDate',
            en: 'ExpirationDate',
            ti: 'Calendar'
          }, {
            n: 'output',
            col: true,
            en: 'Output',
            ti: '.DataOutputType'
          }]
      }, {
        ln: 'DataOutputType',
        ps: [{
            n: 'data',
            en: 'Data',
            ti: '.Data'
          }, {
            n: 'reference',
            en: 'Reference',
            ti: '.ReferenceType'
          }, {
            n: 'output',
            en: 'Output',
            ti: '.DataOutputType'
          }, {
            n: 'id',
            an: {
              lp: 'id'
            },
            t: 'a'
          }]
      }, {
        ln: 'SupportedCRS',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: '_default',
            ti: 'Boolean',
            an: {
              lp: 'default'
            },
            t: 'a'
          }]
      }, {
        ln: 'Contents',
        ps: [{
            n: 'processSummary',
            col: true,
            en: 'ProcessSummary',
            ti: '.ProcessSummaryType'
          }]
      }, {
        ln: 'ProcessOffering',
        ps: [{
            n: 'process',
            en: 'Process',
            ti: '.ProcessDescriptionType'
          }, {
            n: 'any',
            mx: false,
            t: 'ae'
          }, {
            n: 'jobControlOptions',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'jobControlOptions'
            },
            t: 'a'
          }, {
            n: 'outputTransmission',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'outputTransmission'
            },
            t: 'a'
          }, {
            n: 'processVersion',
            an: {
              lp: 'processVersion'
            },
            t: 'a'
          }, {
            n: 'processModel',
            an: {
              lp: 'processModel'
            },
            t: 'a'
          }]
      }, {
        ln: 'ProcessDescriptionType',
        bti: '.DescriptionType',
        ps: [{
            n: 'input',
            col: true,
            en: 'Input',
            ti: '.InputDescriptionType'
          }, {
            n: 'output',
            col: true,
            en: 'Output',
            ti: '.OutputDescriptionType'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'BoundingBoxData',
        bti: '.DataDescriptionType',
        ps: [{
            n: 'supportedCRS',
            col: true,
            en: 'SupportedCRS',
            ti: '.SupportedCRS'
          }]
      }, {
        ln: 'DataInputType',
        ps: [{
            n: 'data',
            en: 'Data',
            ti: '.Data'
          }, {
            n: 'reference',
            en: 'Reference',
            ti: '.ReferenceType'
          }, {
            n: 'input',
            col: true,
            en: 'Input',
            ti: '.DataInputType'
          }, {
            n: 'id',
            an: {
              lp: 'id'
            },
            t: 'a'
          }]
      }, {
        ln: 'LiteralDataType',
        bti: '.DataDescriptionType',
        ps: [{
            n: 'literalDataDomain',
            col: true,
            en: {
              lp: 'LiteralDataDomain'
            },
            ti: '.LiteralDataType.LiteralDataDomain'
          }]
      }, {
        ln: 'DescriptionType',
        bti: 'OWS_2_0.BasicIdentificationType'
      }, {
        ln: 'StatusInfo',
        ps: [{
            n: 'jobID',
            en: 'JobID'
          }, {
            n: 'status',
            en: 'Status'
          }, {
            n: 'expirationDate',
            en: 'ExpirationDate',
            ti: 'Calendar'
          }, {
            n: 'estimatedCompletion',
            en: 'EstimatedCompletion',
            ti: 'Calendar'
          }, {
            n: 'nextPoll',
            en: 'NextPoll',
            ti: 'Calendar'
          }, {
            n: 'percentCompleted',
            en: 'PercentCompleted',
            ti: 'Int'
          }]
      }, {
        ln: 'ExecuteRequestType',
        bti: '.RequestBaseType',
        ps: [{
            n: 'identifier',
            en: {
              lp: 'Identifier',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.CodeType'
          }, {
            n: 'input',
            col: true,
            en: 'Input',
            ti: '.DataInputType'
          }, {
            n: 'output',
            col: true,
            en: 'Output',
            ti: '.OutputDefinitionType'
          }, {
            n: 'mode',
            an: {
              lp: 'mode'
            },
            t: 'a'
          }, {
            n: 'response',
            an: {
              lp: 'response'
            },
            t: 'a'
          }]
      }, {
        t: 'enum',
        ln: 'DataTransmissionModeType',
        vs: ['value', 'reference']
      }],
    eis: [{
        en: 'ExpirationDate',
        ti: 'Calendar'
      }, {
        en: 'DataDescription',
        ti: '.DataDescriptionType'
      }, {
        en: 'GetStatus',
        ti: '.GetStatus'
      }, {
        en: 'Process',
        ti: '.ProcessDescriptionType'
      }, {
        en: 'Capabilities',
        ti: '.WPSCapabilitiesType'
      }, {
        en: 'JobID'
      }, {
        en: 'LiteralValue',
        ti: '.LiteralValue'
      }, {
        en: 'Result',
        ti: '.Result'
      }, {
        en: 'Format',
        ti: '.Format'
      }, {
        en: 'ProcessOffering',
        ti: '.ProcessOffering'
      }, {
        en: 'Contents',
        ti: '.Contents'
      }, {
        en: 'LiteralData',
        ti: '.LiteralDataType',
        sh: 'DataDescription'
      }, {
        en: 'Execute',
        ti: '.ExecuteRequestType'
      }, {
        en: 'Dismiss',
        ti: '.Dismiss'
      }, {
        en: 'SupportedCRS',
        ti: '.SupportedCRS'
      }, {
        en: 'BoundingBoxData',
        ti: '.BoundingBoxData',
        sh: 'DataDescription'
      }, {
        en: 'StatusInfo',
        ti: '.StatusInfo'
      }, {
        en: 'DescribeProcess',
        ti: '.DescribeProcess'
      }, {
        en: 'Reference',
        ti: '.ReferenceType'
      }, {
        en: 'GetCapabilities',
        ti: '.GetCapabilitiesType'
      }, {
        en: 'ComplexData',
        ti: '.ComplexDataType',
        sh: 'DataDescription'
      }, {
        en: 'Data',
        ti: '.Data'
      }, {
        en: 'ProcessOfferings',
        ti: '.ProcessOfferings'
      }]
  };
  return {
    WPS_2_0: WPS_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WPS_2_0_Module_Factory);
}
else {
  var WPS_2_0_Module = WPS_2_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WPS_2_0 = WPS_2_0_Module.WPS_2_0;
  }
  else {
    var WPS_2_0 = WPS_2_0_Module.WPS_2_0;
  }
}