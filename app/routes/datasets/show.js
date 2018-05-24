import Route from '@ember/routing/route';

export default Route.extend({
  async model(params) {
    const offset = 0;
    const query = `
          PREFIX dcat:    <http://www.w3.org/ns/dcat#>
          PREFIX dcterms: <http://purl.org/dc/terms/>
          SELECT ?title ?description
          FROM <http://stad.gent/dcat/linked-data/>
          WHERE {
             <${params.id}> a dcat:Dataset;
                      dcterms:title ?title;
                      dcterms:description ?description.
          }
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
    return body.results.bindings[0];
  }
});
