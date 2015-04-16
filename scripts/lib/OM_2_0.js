var OM_2_0_Module_Factory = function () {
  var OM_2_0 = {
    n: 'OM_2_0',
    dens: 'http:\/\/www.opengis.net\/om\/2.0',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    deps: ['GML_3_2_1', 'ISO19139_GMD_20070417', 'XLink_1_0'],
    tis: [{
        ln: 'ObservationContextPropertyType',
        ps: [{
            n: 'observationContext',
            en: 'ObservationContext',
            ti: '.ObservationContextType'
          }]
      }, {
        ln: 'OMObservationType',
        tn: 'OM_ObservationType',
        bti: 'GML_3_2_1.AbstractFeatureType',
        ps: [{
            n: 'type',
            ti: 'GML_3_2_1.ReferenceType'
          }, {
            n: 'metadata',
            ti: 'ISO19139_GMD_20070417.MDMetadataPropertyType'
          }, {
            n: 'relatedObservation',
            col: true,
            ti: '.ObservationContextPropertyType'
          }, {
            n: 'phenomenonTime',
            ti: '.TimeObjectPropertyType'
          }, {
            n: 'resultTime',
            ti: 'GML_3_2_1.TimeInstantPropertyType'
          }, {
            n: 'validTime',
            ti: 'GML_3_2_1.TimePeriodPropertyType'
          }, {
            n: 'procedure',
            ti: '.OMProcessPropertyType'
          }, {
            n: 'parameter',
            col: true,
            ti: '.NamedValuePropertyType'
          }, {
            n: 'observedProperty',
            ti: 'GML_3_2_1.ReferenceType'
          }, {
            n: 'featureOfInterest',
            ti: 'GML_3_2_1.FeaturePropertyType'
          }, {
            n: 'resultQuality',
            col: true,
            ti: 'ISO19139_GMD_20070417.DQElementPropertyType'
          }, {
            n: 'result',
            ti: 'AnyType'
          }]
      }, {
        ln: 'OMProcessPropertyType',
        tn: 'OM_ProcessPropertyType',
        ps: [{
            n: 'any',
            mx: false,
            t: 'ae'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'NamedValueType',
        ps: [{
            n: 'name',
            ti: 'GML_3_2_1.ReferenceType'
          }, {
            n: 'value',
            ti: 'AnyType'
          }]
      }, {
        ln: 'OMObservationPropertyType',
        tn: 'OM_ObservationPropertyType',
        ps: [{
            n: 'omObservation',
            en: 'OM_Observation',
            ti: '.OMObservationType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'NamedValuePropertyType',
        ps: [{
            n: 'namedValue',
            en: 'NamedValue',
            ti: '.NamedValueType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'ObservationContextType',
        ps: [{
            n: 'role',
            ti: 'GML_3_2_1.ReferenceType'
          }, {
            n: 'relatedObservation',
            ti: 'GML_3_2_1.ReferenceType'
          }]
      }, {
        ln: 'TimeObjectPropertyType',
        ps: [{
            n: 'abstractTimeObject',
            mx: false,
            dom: false,
            en: {
              lp: 'AbstractTimeObject',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.AbstractTimeObjectType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }],
    eis: [{
        en: 'OM_Observation',
        ti: '.OMObservationType',
        sh: {
          lp: 'AbstractFeature',
          ns: 'http:\/\/www.opengis.net\/gml\/3.2'
        }
      }, {
        en: 'result',
        ti: 'AnyType'
      }, {
        en: 'ObservationContext',
        ti: '.ObservationContextType'
      }, {
        en: 'NamedValue',
        ti: '.NamedValueType'
      }]
  };
  return {
    OM_2_0: OM_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], OM_2_0_Module_Factory);
}
else {
  var OM_2_0_Module = OM_2_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.OM_2_0 = OM_2_0_Module.OM_2_0;
  }
  else {
    var OM_2_0 = OM_2_0_Module.OM_2_0;
  }
}