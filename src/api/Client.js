export class SourceClient {
  // error handling
  errorHandler(response) {
    if (response.status >= 400 && response.status < 600) {
      throw new Error('Bad response from server')
    }
  }

  errorHandlerResponse(response, res) {
    if (response.status >= 400 && response.status < 600) {
      throw new Error('Bad response from server') && alert(res.msg)
    }
  }

  sanitizeUI() {
    this.sources = this.sources.filter(e => {
      return !!e._id && e.issuingAuthorityId
    })
  }

  async fetchSources() {
    let response = await fetch(
      `https://api-staging.azurewebsites.net/sources/all?limit=10&displayOnly=true`
    )
    this.sources = await response.json()
    this.errorHandler(response)
    this.sanitizeUI()
    return this.sources
  }

  async deleteSource(sourceId) {
    const _id = sourceId
    const response = await fetch(
      `https://api-staging.azurewebsites.net/sources/delete?id=${_id}`,
      {
        mode: 'cors',
        method: 'DELETE'
      }
    )
    this.source = await response.json()
    this.errorHandler(response)
    return this.sources
  }

  async updateSource(source) {
    let reqBody = {
      $set: {
        issuingAuthorityId: 0,
        originUrls: [source.originUrls],
        commonCarrierId: 0,
        crawlMode: true,
        maxDepth: 0,
        downloadHtml: true,
        hasRedirects: true,
        hasJavascript: true,
        offsiteDownloads: true,
        restrictSubdomain: true,
        downloadUrlBlockPatterns: [],
        downloadUrlGrabPatterns: [],
        downloadCssBlockSelectors: [],
        downloadCssGrabSelectors: [],
        navigationUrlBlockPatterns: [],
        navigationUrlGrabPatterns: [],
        navigationCssBlockSelectors: [],
        navigationCssGrabSelectors: []
      }
    }
    const response = await fetch(
      `https://api-staging.azurewebsites.net/sources/update?id=${source._id}`,
      {
        mode: 'cors',
        method: 'PATCH',
        body: JSON.stringify(reqBody),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      }
    )
    this.source = await response.json()
    this.errorHandler(response)
    return this.sources
  }

  //create
  async createSource(source) {
    let reqBody = {
      $set: {
        issuingAuthorityId: 0,
        originUrls: [source.originUrls],
        commonCarrierId: 0,
        crawlMode: true,
        maxDepth: 0,
        downloadHtml: true,
        hasRedirects: true,
        hasJavascript: true,
        offsiteDownloads: true,
        restrictSubdomain: true,
        downloadUrlBlockPatterns: [],
        downloadUrlGrabPatterns: [],
        downloadCssBlockSelectors: [],
        downloadCssGrabSelectors: [],
        navigationUrlBlockPatterns: [],
        navigationUrlGrabPatterns: [],
        navigationCssBlockSelectors: [],
        navigationCssGrabSelectors: []
      }
    }
    const response = await fetch(
      `https://api-staging.azurewebsites.net/sources/create?id=${source._id}`,
      {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      }
    )
    const res = await response.json()
    if (res.result) {
      this.source = res
    } else {
      this.errorHandlerResponse(response, res)
    }
    return this.sources
  }
}
export default new SourceClient()
