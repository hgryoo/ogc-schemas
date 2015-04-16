var GML_2_1_2_Module_Factory = function () {
  var GML_2_1_2 = {
    n: 'GML_2_1_2',
    dens: 'http:\/\/www.opengis.net\/gml',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    deps: ['XLink_1_0'],
    tis: [{
        ln: 'GeometryPropertyType',
        ps: [{
            n: 'geometry',
            mx: false,
            dom: false,
            en: '_Geometry',
            ti: '.AbstractGeometryType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
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
        ln: 'MultiPolygonPropertyType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'GeometryCollectionType',
        bti: '.AbstractGeometryCollectionBaseType',
        ps: [{
            n: 'geometryMember',
            col: true,
            mx: false,
            dom: false,
            ti: '.GeometryAssociationType',
            t: 'er'
          }]
      }, {
        ln: 'AbstractFeatureCollectionBaseType',
        bti: '.AbstractFeatureType'
      }, {
        ln: 'AbstractGeometryCollectionBaseType',
        bti: '.AbstractGeometryType'
      }, {
        ln: 'PointPropertyType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'PointMemberType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'FeatureAssociationType',
        ps: [{
            n: 'feature',
            mx: false,
            dom: false,
            en: '_Feature',
            ti: '.AbstractFeatureType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
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
        ln: 'MultiLineStringPropertyType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'CoordinatesType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'decimal',
            an: {
              lp: 'decimal'
            },
            t: 'a'
          }, {
            n: 'cs',
            an: {
              lp: 'cs'
            },
            t: 'a'
          }, {
            n: 'ts',
            an: {
              lp: 'ts'
            },
            t: 'a'
          }]
      }, {
        ln: 'MultiPolygonType',
        bti: '.GeometryCollectionType'
      }, {
        ln: 'LineStringPropertyType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'MultiPointPropertyType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'MultiPointType',
        bti: '.GeometryCollectionType'
      }, {
        ln: 'AbstractFeatureCollectionType',
        bti: '.AbstractFeatureCollectionBaseType',
        ps: [{
            n: 'featureMember',
            col: true,
            ti: '.FeatureAssociationType'
          }]
      }, {
        ln: 'AbstractFeatureType',
        ps: [{
            n: 'description'
          }, {
            n: 'name'
          }, {
            n: 'boundedBy',
            ti: '.BoundingShapeType'
          }, {
            n: 'fid',
            ti: 'ID',
            an: {
              lp: 'fid'
            },
            t: 'a'
          }]
      }, {
        ln: 'LinearRingType',
        bti: '.AbstractGeometryType',
        ps: [{
            n: 'coord',
            col: true,
            ti: '.CoordType'
          }, {
            n: 'coordinates',
            ti: '.CoordinatesType'
          }]
      }, {
        ln: 'BoxType',
        bti: '.AbstractGeometryType',
        ps: [{
            n: 'coord',
            col: true,
            ti: '.CoordType'
          }, {
            n: 'coordinates',
            ti: '.CoordinatesType'
          }]
      }, {
        ln: 'LineStringType',
        bti: '.AbstractGeometryType',
        ps: [{
            n: 'coord',
            col: true,
            ti: '.CoordType'
          }, {
            n: 'coordinates',
            ti: '.CoordinatesType'
          }]
      }, {
        ln: 'PointType',
        bti: '.AbstractGeometryType',
        ps: [{
            n: 'coord',
            ti: '.CoordType'
          }, {
            n: 'coordinates',
            ti: '.CoordinatesType'
          }]
      }, {
        ln: 'PolygonType',
        bti: '.AbstractGeometryType',
        ps: [{
            n: 'outerBoundaryIs',
            ti: '.LinearRingMemberType'
          }, {
            n: 'innerBoundaryIs',
            col: true,
            ti: '.LinearRingMemberType'
          }]
      }, {
        ln: 'AbstractGeometryType',
        ps: [{
            n: 'gid',
            ti: 'ID',
            an: {
              lp: 'gid'
            },
            t: 'a'
          }, {
            n: 'srsName',
            an: {
              lp: 'srsName'
            },
            t: 'a'
          }]
      }, {
        ln: 'MultiLineStringType',
        bti: '.GeometryCollectionType'
      }, {
        ln: 'BoundingShapeType',
        ps: [{
            n: 'box',
            en: 'Box',
            ti: '.BoxType'
          }, {
            n: '_null',
            en: 'null'
          }]
      }, {
        ln: 'GeometryAssociationType',
        ps: [{
            n: 'geometry',
            mx: false,
            dom: false,
            en: '_Geometry',
            ti: '.AbstractGeometryType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
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
        ln: 'LinearRingMemberType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'PolygonMemberType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'MultiGeometryPropertyType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'PolygonPropertyType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'LineStringMemberType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'CoordType',
        ps: [{
            n: 'x',
            en: 'X',
            ti: 'Decimal'
          }, {
            n: 'y',
            en: 'Y',
            ti: 'Decimal'
          }, {
            n: 'z',
            en: 'Z',
            ti: 'Decimal'
          }]
      }, {
        t: 'enum',
        ln: 'NullType',
        vs: ['inapplicable', 'unknown', 'unavailable', 'missing']
      }],
    eis: [{
        en: 'LineString',
        ti: '.LineStringType',
        sh: '_Geometry'
      }, {
        en: '_geometryProperty',
        ti: '.GeometryAssociationType'
      }, {
        en: 'polygonProperty',
        ti: '.PolygonPropertyType',
        sh: '_geometryProperty'
      }, {
        en: 'LinearRing',
        ti: '.LinearRingType',
        sh: '_Geometry'
      }, {
        en: '_GeometryCollection',
        ti: '.GeometryCollectionType',
        sh: '_Geometry'
      }, {
        en: 'multiCenterOf',
        ti: '.MultiPointPropertyType',
        sh: 'multiPointProperty'
      }, {
        en: 'extentOf',
        ti: '.PolygonPropertyType',
        sh: 'polygonProperty'
      }, {
        en: 'multiPosition',
        ti: '.MultiPointPropertyType',
        sh: 'multiPointProperty'
      }, {
        en: 'MultiPolygon',
        ti: '.MultiPolygonType',
        sh: '_Geometry'
      }, {
        en: 'lineStringMember',
        ti: '.LineStringMemberType',
        sh: 'geometryMember'
      }, {
        en: 'boundedBy',
        ti: '.BoundingShapeType'
      }, {
        en: 'description'
      }, {
        en: 'multiCoverage',
        ti: '.MultiPolygonPropertyType',
        sh: 'multiPolygonProperty'
      }, {
        en: 'edgeOf',
        ti: '.LineStringPropertyType',
        sh: 'lineStringProperty'
      }, {
        en: 'pointMember',
        ti: '.PointMemberType',
        sh: 'geometryMember'
      }, {
        en: 'Polygon',
        ti: '.PolygonType',
        sh: '_Geometry'
      }, {
        en: 'multiLineStringProperty',
        ti: '.MultiLineStringPropertyType',
        sh: '_geometryProperty'
      }, {
        en: 'lineStringProperty',
        ti: '.LineStringPropertyType',
        sh: '_geometryProperty'
      }, {
        en: 'position',
        ti: '.PointPropertyType',
        sh: 'pointProperty'
      }, {
        en: 'coord',
        ti: '.CoordType'
      }, {
        en: '_Feature',
        ti: '.AbstractFeatureType'
      }, {
        en: 'geometryProperty',
        ti: '.GeometryAssociationType'
      }, {
        en: 'multiPointProperty',
        ti: '.MultiPointPropertyType',
        sh: '_geometryProperty'
      }, {
        en: 'geometryMember',
        ti: '.GeometryAssociationType'
      }, {
        en: 'multiCenterLineOf',
        ti: '.MultiLineStringPropertyType',
        sh: 'multiLineStringProperty'
      }, {
        en: 'location',
        ti: '.PointPropertyType',
        sh: 'pointProperty'
      }, {
        en: '_FeatureCollection',
        ti: '.AbstractFeatureCollectionType',
        sh: '_Feature'
      }, {
        en: 'innerBoundaryIs',
        ti: '.LinearRingMemberType'
      }, {
        en: 'multiGeometryProperty',
        ti: '.MultiGeometryPropertyType',
        sh: '_geometryProperty'
      }, {
        en: 'name'
      }, {
        en: 'coordinates',
        ti: '.CoordinatesType'
      }, {
        en: 'centerOf',
        ti: '.PointPropertyType',
        sh: 'pointProperty'
      }, {
        en: 'multiPolygonProperty',
        ti: '.MultiPolygonPropertyType',
        sh: '_geometryProperty'
      }, {
        en: 'MultiGeometry',
        ti: '.GeometryCollectionType',
        sh: '_Geometry'
      }, {
        en: 'MultiLineString',
        ti: '.MultiLineStringType',
        sh: '_Geometry'
      }, {
        en: 'outerBoundaryIs',
        ti: '.LinearRingMemberType'
      }, {
        en: 'multiEdgeOf',
        ti: '.MultiLineStringPropertyType',
        sh: 'multiLineStringProperty'
      }, {
        en: 'centerLineOf',
        ti: '.LineStringPropertyType',
        sh: 'lineStringProperty'
      }, {
        en: 'MultiPoint',
        ti: '.MultiPointType',
        sh: '_Geometry'
      }, {
        en: 'multiLocation',
        ti: '.MultiPointPropertyType',
        sh: 'multiPointProperty'
      }, {
        en: 'coverage',
        ti: '.PolygonPropertyType',
        sh: 'polygonProperty'
      }, {
        en: 'pointProperty',
        ti: '.PointPropertyType',
        sh: '_geometryProperty'
      }, {
        en: '_Geometry',
        ti: '.AbstractGeometryType'
      }, {
        en: 'multiExtentOf',
        ti: '.MultiPolygonPropertyType',
        sh: 'multiPolygonProperty'
      }, {
        en: 'featureMember',
        ti: '.FeatureAssociationType'
      }, {
        en: 'polygonMember',
        ti: '.PolygonMemberType',
        sh: 'geometryMember'
      }, {
        en: 'Box',
        ti: '.BoxType'
      }, {
        en: 'Point',
        ti: '.PointType',
        sh: '_Geometry'
      }]
  };
  return {
    GML_2_1_2: GML_2_1_2
  };
};
if (typeof define === 'function' && define.amd) {
  define([], GML_2_1_2_Module_Factory);
}
else {
  var GML_2_1_2_Module = GML_2_1_2_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.GML_2_1_2 = GML_2_1_2_Module.GML_2_1_2;
  }
  else {
    var GML_2_1_2 = GML_2_1_2_Module.GML_2_1_2;
  }
}