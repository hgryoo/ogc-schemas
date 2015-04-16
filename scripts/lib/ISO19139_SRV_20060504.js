var ISO19139_SRV_20060504_Module_Factory = function () {
  var ISO19139_SRV_20060504 = {
    n: 'ISO19139_SRV_20060504',
    dens: 'http:\/\/www.isotc211.org\/2005\/srv',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    deps: ['XLink_1_0', 'ISO19139_GCO_20060504', 'GML_3_2_0', 'ISO19139_GMD_20060504'],
    tis: [{
        ln: 'SVOperationType',
        tn: 'SV_Operation_Type',
        bti: 'ISO19139_GCO_20060504.AbstractObjectType',
        ps: [{
            n: 'operationName',
            ti: 'ISO19139_GCO_20060504.MemberNamePropertyType'
          }, {
            n: 'dependsOn',
            col: true,
            ti: '.SVOperationPropertyType'
          }, {
            n: 'parameter',
            ti: '.SVParameterPropertyType'
          }]
      }, {
        ln: 'SVOperationMetadataType',
        tn: 'SV_OperationMetadata_Type',
        bti: 'ISO19139_GCO_20060504.AbstractObjectType',
        ps: [{
            n: 'operationName',
            ti: 'ISO19139_GCO_20060504.CharacterStringPropertyType'
          }, {
            n: 'dcp',
            col: true,
            en: 'DCP',
            ti: '.DCPListPropertyType'
          }, {
            n: 'operationDescription',
            ti: 'ISO19139_GCO_20060504.CharacterStringPropertyType'
          }, {
            n: 'invocationName',
            ti: 'ISO19139_GCO_20060504.CharacterStringPropertyType'
          }, {
            n: 'parameters',
            col: true,
            ti: '.SVParameterPropertyType'
          }, {
            n: 'connectPoint',
            col: true,
            ti: 'ISO19139_GMD_20060504.CIOnlineResourcePropertyType'
          }, {
            n: 'dependsOn',
            col: true,
            ti: '.SVOperationMetadataPropertyType'
          }]
      }, {
        ln: 'SVOperationMetadataPropertyType',
        tn: 'SV_OperationMetadata_PropertyType',
        ps: [{
            n: 'svOperationMetadata',
            en: 'SV_OperationMetadata',
            ti: '.SVOperationMetadataType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'SVOperationChainType',
        tn: 'SV_OperationChain_Type',
        bti: 'ISO19139_GCO_20060504.AbstractObjectType',
        ps: [{
            n: 'name',
            ti: 'ISO19139_GCO_20060504.CharacterStringPropertyType'
          }, {
            n: 'description',
            ti: 'ISO19139_GCO_20060504.CharacterStringPropertyType'
          }, {
            n: 'operation',
            col: true,
            ti: '.SVOperationPropertyType'
          }]
      }, {
        ln: 'SVOperationChainMetadataType',
        tn: 'SV_OperationChainMetadata_Type',
        bti: 'ISO19139_GCO_20060504.AbstractObjectType',
        ps: [{
            n: 'name',
            ti: 'ISO19139_GCO_20060504.CharacterStringPropertyType'
          }, {
            n: 'description',
            ti: 'ISO19139_GCO_20060504.CharacterStringPropertyType'
          }, {
            n: 'operation',
            col: true,
            ti: '.SVOperationMetadataPropertyType'
          }]
      }, {
        ln: 'SVPortSpecificationPropertyType',
        tn: 'SV_PortSpecification_PropertyType',
        ps: [{
            n: 'svPortSpecification',
            en: 'SV_PortSpecification',
            ti: '.SVPortSpecificationType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'SVServicePropertyType',
        tn: 'SV_Service_PropertyType',
        ps: [{
            n: 'svService',
            en: 'SV_Service',
            ti: '.SVServiceType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'SVPlatformNeutralServiceSpecificationPropertyType',
        tn: 'SV_PlatformNeutralServiceSpecification_PropertyType',
        ps: [{
            n: 'svPlatformNeutralServiceSpecification',
            mx: false,
            dom: false,
            en: 'SV_PlatformNeutralServiceSpecification',
            ti: '.SVPlatformNeutralServiceSpecificationType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'SVCoupledResourcePropertyType',
        tn: 'SV_CoupledResource_PropertyType',
        ps: [{
            n: 'svCoupledResource',
            en: 'SV_CoupledResource',
            ti: '.SVCoupledResourceType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'SVInterfacePropertyType',
        tn: 'SV_Interface_PropertyType',
        ps: [{
            n: 'svInterface',
            en: 'SV_Interface',
            ti: '.SVInterfaceType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'SVServiceType',
        tn: 'SV_Service_Type',
        bti: 'ISO19139_GCO_20060504.AbstractObjectType',
        ps: [{
            n: 'specification',
            col: true,
            ti: '.SVPlatformSpecificServiceSpecificationPropertyType'
          }, {
            n: 'theSVPort',
            col: true,
            en: 'theSV_Port',
            ti: '.SVPortPropertyType'
          }]
      }, {
        ln: 'SVPlatformSpecificServiceSpecificationType',
        tn: 'SV_PlatformSpecificServiceSpecification_Type',
        bti: '.SVPlatformNeutralServiceSpecificationType',
        ps: [{
            n: 'dcp',
            en: 'DCP',
            ti: '.DCPListPropertyType'
          }, {
            n: 'implementation',
            col: true,
            ti: '.SVServicePropertyType'
          }]
      }, {
        ln: 'SVParameterType',
        tn: 'SV_Parameter_Type',
        bti: 'ISO19139_GCO_20060504.AbstractObjectType',
        ps: [{
            n: 'name',
            ti: 'ISO19139_GCO_20060504.MemberNameType'
          }, {
            n: 'direction',
            ti: '.SVParameterDirectionPropertyType'
          }, {
            n: 'description',
            ti: 'ISO19139_GCO_20060504.CharacterStringPropertyType'
          }, {
            n: 'optionality',
            ti: 'ISO19139_GCO_20060504.CharacterStringPropertyType'
          }, {
            n: 'repeatability',
            ti: 'ISO19139_GCO_20060504.BooleanPropertyType'
          }, {
            n: 'valueType',
            ti: 'ISO19139_GCO_20060504.TypeNamePropertyType'
          }]
      }, {
        ln: 'SVOperationPropertyType',
        tn: 'SV_Operation_PropertyType',
        ps: [{
            n: 'svOperation',
            en: 'SV_Operation',
            ti: '.SVOperationType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'SVPlatformNeutralServiceSpecificationType',
        tn: 'SV_PlatformNeutralServiceSpecification_Type',
        bti: '.SVServiceSpecificationType',
        ps: [{
            n: 'serviceType',
            ti: '.SVServiceTypePropertyType'
          }, {
            n: 'implSpec',
            ti: '.SVPlatformSpecificServiceSpecificationPropertyType'
          }]
      }, {
        ln: 'SVCoupledResourceType',
        tn: 'SV_CoupledResource_Type',
        bti: 'ISO19139_GCO_20060504.AbstractObjectType',
        ps: [{
            n: 'operationName',
            ti: 'ISO19139_GCO_20060504.CharacterStringPropertyType'
          }, {
            n: 'identifier',
            ti: 'ISO19139_GCO_20060504.CharacterStringPropertyType'
          }, {
            n: 'scopedName',
            en: {
              lp: 'ScopedName',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            ti: 'GML_3_2_0.CodeType'
          }]
      }, {
        ln: 'SVPlatformSpecificServiceSpecificationPropertyType',
        tn: 'SV_PlatformSpecificServiceSpecification_PropertyType',
        ps: [{
            n: 'svPlatformSpecificServiceSpecification',
            en: 'SV_PlatformSpecificServiceSpecification',
            ti: '.SVPlatformSpecificServiceSpecificationType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'SVOperationModelPropertyType',
        tn: 'SV_OperationModel_PropertyType',
        ps: [{
            n: 'svOperationModel',
            en: 'SV_OperationModel'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'SVServiceIdentificationPropertyType',
        tn: 'SV_ServiceIdentification_PropertyType',
        ps: [{
            n: 'svServiceIdentification',
            en: 'SV_ServiceIdentification',
            ti: '.SVServiceIdentificationType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'SVPortType',
        tn: 'SV_Port_Type',
        bti: 'ISO19139_GCO_20060504.AbstractObjectType',
        ps: [{
            n: 'theSVInterface',
            col: true,
            en: 'theSV_Interface',
            ti: '.SVInterfacePropertyType'
          }]
      }, {
        ln: 'SVServiceTypeType',
        tn: 'SV_ServiceType_Type',
        bti: 'ISO19139_GCO_20060504.AbstractObjectType'
      }, {
        ln: 'SVPortPropertyType',
        tn: 'SV_Port_PropertyType',
        ps: [{
            n: 'svPort',
            en: 'SV_Port',
            ti: '.SVPortType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'SVOperationChainMetadataPropertyType',
        tn: 'SV_OperationChainMetadata_PropertyType',
        ps: [{
            n: 'svOperationChainMetadata',
            en: 'SV_OperationChainMetadata',
            ti: '.SVOperationChainMetadataType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'SVServiceSpecificationPropertyType',
        tn: 'SV_ServiceSpecification_PropertyType',
        ps: [{
            n: 'svServiceSpecification',
            mx: false,
            dom: false,
            en: 'SV_ServiceSpecification',
            ti: '.SVServiceSpecificationType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'SVParameterDirectionPropertyType',
        tn: 'SV_ParameterDirection_PropertyType',
        ps: [{
            n: 'svParameterDirection',
            en: 'SV_ParameterDirection'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'SVOperationChainPropertyType',
        tn: 'SV_OperationChain_PropertyType',
        ps: [{
            n: 'svOperationChain',
            en: 'SV_OperationChain',
            ti: '.SVOperationChainType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'SVPortSpecificationType',
        tn: 'SV_PortSpecification_Type',
        bti: 'ISO19139_GCO_20060504.AbstractObjectType',
        ps: [{
            n: 'binding',
            ti: '.DCPListPropertyType'
          }, {
            n: 'address',
            ti: 'ISO19139_GMD_20060504.URLPropertyType'
          }]
      }, {
        ln: 'SVParameterPropertyType',
        tn: 'SV_Parameter_PropertyType',
        ps: [{
            n: 'svParameter',
            en: 'SV_Parameter',
            ti: '.SVParameterType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'SVServiceSpecificationType',
        tn: 'SV_ServiceSpecification_Type',
        bti: 'ISO19139_GCO_20060504.AbstractObjectType',
        ps: [{
            n: 'name',
            ti: 'ISO19139_GCO_20060504.CharacterStringPropertyType'
          }, {
            n: 'opModel',
            ti: '.SVOperationModelPropertyType'
          }, {
            n: 'typeSpec',
            ti: '.SVPlatformNeutralServiceSpecificationPropertyType'
          }, {
            n: 'theSVInterface',
            col: true,
            en: 'theSV_Interface',
            ti: '.SVInterfacePropertyType'
          }]
      }, {
        ln: 'DCPListPropertyType',
        tn: 'DCPList_PropertyType',
        ps: [{
            n: 'dcpList',
            en: 'DCPList',
            ti: 'ISO19139_GCO_20060504.CodeListValueType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'SVServiceTypePropertyType',
        tn: 'SV_ServiceType_PropertyType',
        ps: [{
            n: 'svServiceType',
            en: 'SV_ServiceType',
            ti: '.SVServiceTypeType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }, {
            n: 'uuidref',
            an: {
              lp: 'uuidref'
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
        ln: 'SVInterfaceType',
        tn: 'SV_Interface_Type',
        bti: 'ISO19139_GCO_20060504.AbstractObjectType',
        ps: [{
            n: 'typeName',
            ti: 'ISO19139_GCO_20060504.TypeNamePropertyType'
          }, {
            n: 'theSVPort',
            col: true,
            en: 'theSV_Port',
            ti: '.SVPortPropertyType'
          }, {
            n: 'operation',
            ti: '.SVOperationPropertyType'
          }]
      }, {
        ln: 'SVCouplingTypePropertyType',
        tn: 'SV_CouplingType_PropertyType',
        ps: [{
            n: 'svCouplingType',
            en: 'SV_CouplingType',
            ti: 'ISO19139_GCO_20060504.CodeListValueType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason',
              ns: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            t: 'a'
          }]
      }, {
        ln: 'SVServiceIdentificationType',
        tn: 'SV_ServiceIdentification_Type',
        bti: 'ISO19139_GMD_20060504.AbstractMDIdentificationType',
        ps: [{
            n: 'serviceType',
            ti: 'ISO19139_GCO_20060504.GenericNamePropertyType'
          }, {
            n: 'serviceTypeVersion',
            col: true,
            ti: 'ISO19139_GCO_20060504.CharacterStringPropertyType'
          }, {
            n: 'accessProperties',
            ti: 'ISO19139_GMD_20060504.MDStandardOrderProcessPropertyType'
          }, {
            n: 'restrictions',
            ti: 'ISO19139_GMD_20060504.MDConstraintsPropertyType'
          }, {
            n: 'keywords',
            col: true,
            ti: 'ISO19139_GMD_20060504.MDKeywordsPropertyType'
          }, {
            n: 'extent',
            col: true,
            ti: 'ISO19139_GMD_20060504.EXExtentPropertyType'
          }, {
            n: 'coupledResource',
            col: true,
            ti: '.SVCoupledResourcePropertyType'
          }, {
            n: 'couplingType',
            ti: '.SVCouplingTypePropertyType'
          }, {
            n: 'containsOperations',
            col: true,
            ti: '.SVOperationMetadataPropertyType'
          }, {
            n: 'operatesOn',
            col: true,
            ti: 'ISO19139_GMD_20060504.MDDataIdentificationPropertyType'
          }]
      }, {
        t: 'enum',
        ln: 'SVParameterDirectionType',
        vs: ['in', 'out', 'in\/out']
      }, {
        t: 'enum',
        ln: 'SVOperationModelType',
        vs: ['object', 'message']
      }],
    eis: [{
        en: 'SV_ServiceType',
        ti: '.SVServiceTypeType'
      }, {
        en: 'SV_CoupledResource',
        ti: '.SVCoupledResourceType'
      }, {
        en: 'SV_ServiceIdentification',
        ti: '.SVServiceIdentificationType',
        sh: {
          lp: 'AbstractMD_Identification',
          ns: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        en: 'SV_PortSpecification',
        ti: '.SVPortSpecificationType'
      }, {
        en: 'SV_OperationModel',
        sh: {
          lp: 'CharacterString',
          ns: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        en: 'SV_Interface',
        ti: '.SVInterfaceType'
      }, {
        en: 'SV_PlatformNeutralServiceSpecification',
        ti: '.SVPlatformNeutralServiceSpecificationType',
        sh: 'SV_ServiceSpecification'
      }, {
        en: 'SV_OperationChain',
        ti: '.SVOperationChainType'
      }, {
        en: 'SV_Operation',
        ti: '.SVOperationType'
      }, {
        en: 'SV_ServiceSpecification',
        ti: '.SVServiceSpecificationType'
      }, {
        en: 'SV_Port',
        ti: '.SVPortType'
      }, {
        en: 'SV_ParameterDirection',
        sh: {
          lp: 'CharacterString',
          ns: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        en: 'SV_PlatformSpecificServiceSpecification',
        ti: '.SVPlatformSpecificServiceSpecificationType',
        sh: 'SV_PlatformNeutralServiceSpecification'
      }, {
        en: 'SV_Service',
        ti: '.SVServiceType'
      }, {
        en: 'SV_Parameter',
        ti: '.SVParameterType'
      }, {
        en: 'SV_CouplingType',
        ti: 'ISO19139_GCO_20060504.CodeListValueType',
        sh: {
          lp: 'CharacterString',
          ns: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        en: 'DCPList',
        ti: 'ISO19139_GCO_20060504.CodeListValueType',
        sh: {
          lp: 'CharacterString',
          ns: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        en: 'SV_OperationMetadata',
        ti: '.SVOperationMetadataType'
      }, {
        en: 'SV_OperationChainMetadata',
        ti: '.SVOperationChainMetadataType'
      }]
  };
  return {
    ISO19139_SRV_20060504: ISO19139_SRV_20060504
  };
};
if (typeof define === 'function' && define.amd) {
  define([], ISO19139_SRV_20060504_Module_Factory);
}
else {
  var ISO19139_SRV_20060504_Module = ISO19139_SRV_20060504_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.ISO19139_SRV_20060504 = ISO19139_SRV_20060504_Module.ISO19139_SRV_20060504;
  }
  else {
    var ISO19139_SRV_20060504 = ISO19139_SRV_20060504_Module.ISO19139_SRV_20060504;
  }
}