let apiContactApi = new TempApi.ContactApi();import TempApi from '../src/index';document.getElementById('im4al').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/addContact' ;}};document.getElementById('inqmpg').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("inqmpg")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/ContactInfo/' + transitionId;}};document.getElementById('izkove').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("izkove")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateContact/' + transitionId;}};document.getElementById('i2f52q').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("i2f52q")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/ContactInfo/' + transitionId;}};document.getElementById('ige8bb').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("ige8bb")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateContact/' + transitionId;}};document.getElementById('iqec2h').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("iqec2h")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/ContactInfo/' + transitionId;}};document.getElementById('i07gz9').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("i07gz9")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateContact/' + transitionId;}};window.onload = () => {const filterfunders = {role: { $eq: "developer"}}; apiContactApi.getByParamscontact( filterfunders, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("id0uf").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'img']");
if(insideSubDataElement !== null && data[data.length -i -1].img !== undefined){
  insideSubDataElement.src = data[data.length -i -1].img.data;
  insideSubDataElement.name = data[data.length -i -1].img.name;
}
else if(subDataElements[i].getAttribute('annotationname') === 'img' && data[data.length -i -1].img !== undefined){
  subDataElements[i].src = data[data.length -i -1].img.data;
  subDataElements[i].name = data[data.length -i -1].img.name;
}
 } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'fullName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].fullName;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'fullName'){
        subDataElements[i].textContent = data[data.length -i -1].fullName;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'role']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].role;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'role'){
        subDataElements[i].textContent = data[data.length -i -1].role;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    
    // Retrieve current data from local storage
    const storedData = window.localStorage.getItem("data");
    const currentData = storedData
        ? new Map(JSON.parse(storedData))
        : new Map();

    // Add new data to current data
    const newData = Array.from(map.entries());
    newData.forEach(([key, value]) => {
        currentData.set(key, value);
    });

    // Save updated data to local storage
    window.localStorage.setItem(
        "data",
        JSON.stringify(Array.from(currentData.entries()))
    );
    
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};