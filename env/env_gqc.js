const SiteKey = '1ry4yan3vs0s729ezp23hen2en'

module.exports = {
  BASE_API: 'https://apis-gqc.newegg.org/shura/console/v1/',
  // BASE_API: 'https://apis-gqc.newegg.org/cross-border/cbc/v3/',
  FILE_DOMAIN: 'https://dfis-gqc.newegg.org',
  LOG_IN: `http://172.16.168.57:9898/${SiteKey}`,
  LOG_OUT: `http://172.16.168.57:9898/api/${SiteKey}/logout?callback=`
}
