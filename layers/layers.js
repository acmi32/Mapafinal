var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Lineasclientes_WKT_1 = new ol.format.GeoJSON();
var features_Lineasclientes_WKT_1 = format_Lineasclientes_WKT_1.readFeatures(json_Lineasclientes_WKT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lineasclientes_WKT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lineasclientes_WKT_1.addFeatures(features_Lineasclientes_WKT_1);
var lyr_Lineasclientes_WKT_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lineasclientes_WKT_1, 
                style: style_Lineasclientes_WKT_1,
                interactive: true,
                title: '<img src="styles/legend/Lineasclientes_WKT_1.png" /> Lineasclientes_WKT'
            });
var format_clientes_2 = new ol.format.GeoJSON();
var features_clientes_2 = format_clientes_2.readFeatures(json_clientes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clientes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clientes_2.addFeatures(features_clientes_2);
var lyr_clientes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_clientes_2, 
                style: style_clientes_2,
                interactive: true,
                title: '<img src="styles/legend/clientes_2.png" /> clientes'
            });
var format_chile_3 = new ol.format.GeoJSON();
var features_chile_3 = format_chile_3.readFeatures(json_chile_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chile_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chile_3.addFeatures(features_chile_3);
var lyr_chile_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_chile_3, 
                style: style_chile_3,
                interactive: true,
                title: '<img src="styles/legend/chile_3.png" /> chile'
            });
var format_trafochile_4 = new ol.format.GeoJSON();
var features_trafochile_4 = format_trafochile_4.readFeatures(json_trafochile_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trafochile_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trafochile_4.addFeatures(features_trafochile_4);
var lyr_trafochile_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_trafochile_4, 
                style: style_trafochile_4,
                interactive: true,
                title: '<img src="styles/legend/trafochile_4.png" /> trafochile'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Lineasclientes_WKT_1.setVisible(true);lyr_clientes_2.setVisible(true);lyr_chile_3.setVisible(true);lyr_trafochile_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Lineasclientes_WKT_1,lyr_clientes_2,lyr_chile_3,lyr_trafochile_4];
lyr_Lineasclientes_WKT_1.set('fieldAliases', {'ID': 'ID', 'Largo': 'Largo', 'COD_COND_Fase': 'COD_COND_Fase', 'COD_COND_Neutro': 'COD_COND_Neutro', 'Nodo Inicio': 'Nodo Inicio', 'Nodo Fin': 'Nodo Fin', 'Amper': 'Amper', });
lyr_clientes_2.set('fieldAliases', {'NODO': 'NODO', 'x (UTM)': 'x (UTM)', 'y (UTM)': 'y (UTM)', });
lyr_chile_3.set('fieldAliases', {'x (UTM)': 'x (UTM)', 'y (UTM)': 'y (UTM)', });
lyr_trafochile_4.set('fieldAliases', {'x (UTM)': 'x (UTM)', 'y (UTM)': 'y (UTM)', });
lyr_Lineasclientes_WKT_1.set('fieldImages', {'ID': '', 'Largo': '', 'COD_COND_Fase': '', 'COD_COND_Neutro': '', 'Nodo Inicio': '', 'Nodo Fin': '', 'Amper': '', });
lyr_clientes_2.set('fieldImages', {'NODO': '', 'x (UTM)': '', 'y (UTM)': '', });
lyr_chile_3.set('fieldImages', {'x (UTM)': '', 'y (UTM)': '', });
lyr_trafochile_4.set('fieldImages', {'x (UTM)': '', 'y (UTM)': '', });
lyr_Lineasclientes_WKT_1.set('fieldLabels', {'ID': 'no label', 'Largo': 'no label', 'COD_COND_Fase': 'no label', 'COD_COND_Neutro': 'no label', 'Nodo Inicio': 'no label', 'Nodo Fin': 'no label', 'Amper': 'no label', });
lyr_clientes_2.set('fieldLabels', {'NODO': 'no label', 'x (UTM)': 'no label', 'y (UTM)': 'no label', });
lyr_chile_3.set('fieldLabels', {'x (UTM)': 'no label', 'y (UTM)': 'no label', });
lyr_trafochile_4.set('fieldLabels', {'x (UTM)': 'no label', 'y (UTM)': 'no label', });
lyr_trafochile_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});