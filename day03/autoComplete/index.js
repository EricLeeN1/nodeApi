var projectData = {
    'name': 'Eric',
    'fileData': [{
            'name': 'index.html',
            'type': 'file',
            'content': '<html>\n\t<head>\n\t<title>title</title>\n\t</head>\n\t<body>\n\t\t<h1>Hello Eric</h1>\n</body>\n</html>'
        },
        {
            'name': 'css',
            'type': 'dir'
        },
        {
            'name': 'js',
            'type': 'dir'
        },
        {
            'name': 'images',
            'type': 'dir'
        }
    ]
};

var fs = require('fs');
if (projectData.name) {
    fs.mkdirSync(projectData.name);
    var fileData = projectData.fileData;
    if (fileData && fileData.forEach) {
        fileData.forEach(function(element) {
            element.path = projectData.name + '/' + element.name;
            element.content = element.content || '';
            switch (element.type) {
                case 'dir':
                    fs.mkdirSync(element.path);
                    break;

                case 'file':
                    fs.writeFileSync(element.path, element.content);
                    break;

                default:
                    break;
            }
        }, this);
    } else {

    }
} else {

}