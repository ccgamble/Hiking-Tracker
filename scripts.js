L.mapbox.accessToken = 'pk.eyJ1IjoiZ2FtYmxlY2MiLCJhIjoiY2ltcnYwb3pzMDE3M3Y3a2sxY3MyZmdhNCJ9.jhiY7nr5PpZ3SosSf16bIA';
var map = L.mapbox.map('map', 'mapbox.light');

var myLayer = L.mapbox.featureLayer().addTo(map);

var geoJson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-105.8231, 40.2522]
    },
    properties: {
      title: 'Grand Lake',
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/Grand_Lake.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-105.4198, 39.8414]
    },
    properties: {
      title: 'Horseshoe Trail, Golden Gate Canyon State Park',
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/Golden_Gate.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-105.334167, 39.953889]
    },
    properties: {
      title: 'Walker Ranch',
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/Walker_Ranch.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-105.2941, 39.9290]
    },
    properties: {
      title: 'Rattlesnake Gulch Trail, Eldorado Canyon State Park',
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/Rattlesnake_Gulch.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-105.3608, 39.5825]
    },
    properties: {
      title: 'Maxwell Falls',
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/Maxwell_Falls.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-105.6416, 40.2894]
    },
    properties: {
      title: 'Mills Lake, RMNP',
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/Mills_Lake_RMNP.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-105.2881, 39.6553]
    },
    properties: {
      title: "O'Fallon Park",
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/OFallon_Park.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-105.6686, 39.5828]
    },
    properties: {
      title: 'Mount Bierstadt',
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/Bierstadt.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-105.2552, 39.7732]
    },
    properties: {
      title: 'Mount Galbraith',
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/Mount_Galbraith.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-105.5981, 39.6604]
    },
    properties: {
      title: 'Echo Lake',
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/Echo_Lake.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-106.8317, 40.4850]
    },
    properties: {
      title: 'Steamboat Springs',
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/Steamboat.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-105.6469, 39.8358]
    },
    properties: {
      title: "Saint Mary's Glacier",
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/St_Marys.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-105.3075, 40.0017]
    },
    properties: {
      title: 'Lost Gulch Lookout, Flagstaff Mountain',
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/Lost_Gulch.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-105.3687, 39.6697]
    },
    properties: {
      title: 'Elk Meadow Park',
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/Elk_Meadow.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-105.6482, 40.3134]
    },
    properties: {
      title: 'Bear Lake, RMNP',
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/RMNP2.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-104.9172, 39.1222]
    },
    properties: {
      title: 'Palmer Lake',
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/Palmer_Lake.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-105.3537, 39.6250]
    },
    properties: {
      title: 'Alderfer/Three Sisters Park',
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/Three_Sisters.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-105.101844, 39.260394]
    },
    properties: {
      title: "Devil's Head Lookout",
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/Devils_Head.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-105.3057, 39.5203]
    },
    properties: {
      title: 'Meyer Ranch Open Space, Conifer',
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/Conifer.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-108.6939, 39.0575]
    },
    properties: {
      title: 'Colorado National Monument',
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/CNM.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-105.3267, 39.6340]
    },
    properties: {
      title: 'Evergreen',
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/Evergreen.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-105.2780, 39.8304]
    },
    properties: {
      title: 'White Ranch Open Space',
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/white_ranch.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-107.1918, 39.6014]
    },
    properties: {
      title: 'Hanging Lake',
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/Hanging_Lake.jpg']]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-105.7567, 39.4133]
    },
    properties: {
      title: 'Kenosha Pass',
      'marker-color': '#3ca0d3',
      'marker-size': 'small',
      'images': [['images/Kenosha_Pass.jpg']]
    }
  },
]
}

myLayer.on('layeradd', function(e) {
    var marker = e.layer;
    var feature = marker.feature;
    var images = feature.properties.images
    var slideshowContent = '';

    for(var i = 0; i < images.length; i++) {
        var img = images[i];

        slideshowContent += '<div class="image' + (i === 0 ? ' active' : '') + '">' +
                              '<img src="' + img[0] + '" />' +
                            '</div>';
    }

    var popupContent =  '<div id="' + feature.properties.id + '" class="popup">' +
                            '<h2>' + feature.properties.title + '</h2>' +
                            '<div class="slideshow">' +
                                slideshowContent +
                            '</div>' +
                        '</div>';

    marker.bindPopup(popupContent,{
        closeButton: false,
        minWidth: 250
    });
});

myLayer.setGeoJSON(geoJson);

map.setView([40.3 ,-105.8], 8);