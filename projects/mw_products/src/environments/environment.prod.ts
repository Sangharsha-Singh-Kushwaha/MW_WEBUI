let finalEnvironment:any = {
    production: false
};

function loadJSON(filePath: string){
    const json:any = loadJsonFile(filePath, "application/json; charset=utf-8");
    return JSON.parse(json );
}

function loadJsonFile(filePath: string, mimeType: string | null) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', filePath + '?_=' + new Date().getTime(), false);
  if (mimeType != null) {
    if (xmlhttp.overrideMimeType) {
      xmlhttp.overrideMimeType(mimeType);
    }
  }
  xmlhttp.send();
  return (xmlhttp.status == 200) ? xmlhttp.responseText : null;
}

function loadConfigVariables(finalEnvironment: any) {
  let environ: any = loadJSON('assets/Config/Config.json');
  for (let key in environ) {
    let item = environ[key];
    finalEnvironment[key] = item;
  }
  return finalEnvironment;
}

export const environment = loadConfigVariables(finalEnvironment);
