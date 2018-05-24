import Route from '@ember/routing/route';
//import SC2 from 'sparql-client-2';

export default Route.extend({
  async model() {
    const offset = 0;
    const query = `
          PREFIX dcat:    <http://www.w3.org/ns/dcat#>
          PREFIX dcterms: <http://purl.org/dc/terms/>
          SELECT ?dataset ?id ?title
          FROM <http://stad.gent/dcat/linked-data/>
          WHERE {
             ?dataset a dcat:Dataset;
                      dcterms:title ?title.
          } ORDER BY ?title LIMIT 50 OFFSET ${offset}
    `;
    const formData = new FormData();
    const safeQuery = query;
    formData.append('query', safeQuery);
    const result = await fetch('https://stad.gent/sparql', {
      method: 'POST',
      body: formData,
      headers: { 'accept': 'application/sparql-results+json' }
    });
    const body = await result.json();
    return body.results.bindings;
  }
});
