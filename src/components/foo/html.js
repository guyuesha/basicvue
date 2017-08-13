export const temp = `
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <!-- <link href="http://cdn.bootcss.com/minireset.css/0.0.2/minireset.css" rel="stylesheet"> -->
    <!-- <link href="http://cdn.bootcss.com/minireset.css/0.0.2/minireset.css" rel="stylesheet"> -->
    <!-- <link href="https://cdn.bootcss.com/bootstrap/4.0.0-beta/css/bootstrap-grid.css" rel="stylesheet"> -->
    <title>eleproject</title>
    <style type="text/css">
        i{ color: red; }
    </style>
</head>
<body>
    <div id="editContent">倒萨似懂非懂</div>
    <i>nima</i>
</body>
</html>;
`;
export const getHtml = (html) => {
    let content = html;
    return function(html) {
        return `
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <!-- <link href="http://cdn.bootcss.com/minireset.css/0.0.2/minireset.css" rel="stylesheet"> -->
    <!-- <link href="http://cdn.bootcss.com/minireset.css/0.0.2/minireset.css" rel="stylesheet"> -->
    <!-- <link href="https://cdn.bootcss.com/bootstrap/4.0.0-beta/css/bootstrap-grid.css" rel="stylesheet"> -->
    <title>eleproject</title>
    <style type="text/css">
        i{ color: red; }
        .imgPic{
            border: 3px solid red;
        }
    </style>
</head>
<body>
    <div id="editContent">${content}</div>
    <i>nima</i>
</body>
</html>;
`;
    }
}