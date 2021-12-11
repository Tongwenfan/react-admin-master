const SiteKey = '0fehg3uo7goyf26pwwkg6j8g1h'

module.exports = {
  LOCAL:'dev',
  BASE_API: 'https://apis-gqc.newegg.org/shura/console/v1/',
  FILE_DOMAIN: 'https://dfis-gdev.newegg.org',
  LOG_IN: `https://10.16.75.22:9898/${SiteKey}`,
  LOG_OUT: `http://10.16.75.22:9898/api/${SiteKey}/logout?callback=`
}
