const { Reshuffle } = require('reshuffle')
const { EIDRConnector } = require('reshuffle-eidr-connector')

;(async () => {
  const app = new Reshuffle()
  const eidr = new EIDRConnector(app)

  const id = '10.5240/5CA7-2626-3EF6-2B05-AD9C-M'
  const linkedIDs = await eidr.resolve(id, 'LinkedAlternateIDs')
  console.log(linkedIDs)

})().catch(console.error)
