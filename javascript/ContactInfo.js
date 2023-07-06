let apiContactApi = new TempApi.ContactApi();import TempApi from '../src/index';document.getElementById('i3cla').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/' ;}};document.getElementById('i05gbz').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#irzdth';}};document.getElementById('i2ayqq').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#i6iw4i';}};document.getElementById('i913i').onclick = (event) => {
    event.preventDefault();
    let contactId = window.location.pathname.replace('/ContactInfo/','');
      if(contactId === '/ContactInfo' || contactId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i913i")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            contactId = value._id;
            parentId = key;
          }
        });
      }
    apiContactApi.deletecontact( contactId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};window.onload = () => {let contactId = window.location.pathname.replace('/ContactInfo/','');apiContactApi.getcontact( contactId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); try { document.querySelector('[annotationname = fullName]').textContent = response.body.query.fullName; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = company]').textContent = response.body.query.company; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = role]').textContent = response.body.query.role; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = help]').textContent = response.body.query.help; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = interaction]').textContent = response.body.query.interaction; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = outcome]').textContent = response.body.query.outcome; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = email]').textContent = response.body.query.email; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = phone]').textContent = response.body.query.phone; } catch (e) { console.log(e) };}});};