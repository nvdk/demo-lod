import Route from '@ember/routing/route';
export default Route.extend({
  async model(params) {
    const prefix = 'stad.gent/id/';
    const subject = `${prefix}${params.route}`;
    const query = `
      DESCRIBE <http://${subject}> <https://${subject}>
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
    return {
      results: body.results.binding,
      subject: subject
    };
  }
});
