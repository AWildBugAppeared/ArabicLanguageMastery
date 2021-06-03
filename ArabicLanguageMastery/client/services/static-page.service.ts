const Cosmic = require('cosmicjs');

export class StaticPageService {
  private api = Cosmic();

  // Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login

  private bucket = this.api.bucket({
    slug: 'arabic-learning-mastery-staging',
    read_key: 'f3AHHYQTIwG3MxExxX6r8i2Y63enjE05dSTZS73qK1sSyGRDhv',
  });

  public async getPage(pageTitle: string) {
    try {
      const pages = await this.bucket.getObjects({
        query: {
          slug: pageTitle,
        },
        props: 'slug,title,content,metadata', // Limit the API response data by props
      });

      return pages.objects[0];
    } catch (e) {
      if (e.status === 404) return null;
    }
  }
}
