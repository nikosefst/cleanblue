function fupi_head_gtm(){let dl_format=fp.gtm.compat??'default';var data_o={'event':'fp_staticData',};if(fp.notice.enabled){data_o.fp_privacyBannerEnabled=!0;data_o.fp_visitorPrivacyPreferences=fpdata.cookies}else{data_o.fp_privacyBannerEnabled=!1;data_o.fp_visitorPrivacyPreferences=!1}
data_o.fp_trackCurrentUser=fp.main.track_current_user;if(fp.gtm.page_type&&fpdata.page_type&&fpdata.page_type.length>1)
data_o.fp_contentType=fpdata.page_type;if(fp.gtm.page_lang)
data_o.fp_contentLang=document.documentElement.lang||'undefined';if(fp.gtm.browser_lang)
data_o.fp_browserLang=navigator.language;if(fp.gtm.page_title){if(fpdata.page_title)data_o.fp_contentTitle=fpdata.page_title;data_o.fp_contentTitleSEO&&document.title}
if(fp.gtm.page_id&&fpdata.page_id&&fpdata.page_id>0)
data_o.fp_contentID=fpdata.page_id;if(fp.gtm.page_num&&fpdata.page_number>0)
data_o.fp_contentNumber=fpdata.page_number;if(fp.gtm.author&&fpdata.author_name&&fpdata.author_name.length>0)
data_o.fp_contentAuthor=fpdata.author_name;if(fp.gtm.author_id&&fpdata.author_id>0)
data_o.fp_contentAuthorID=fpdata.author_id;if(fp.gtm.post_date&&fpdata.published&&fpdata.published.length>0)
data_o.fp_contentDate=fpdata.published;if(fp.gtm.search_terms&&fpdata.search_query&&fpdata.search_query.length>0)
data_o.fp_searchTerm=fpdata.search_query;if(fp.gtm.search_results&&fpdata.search_results&&fpdata.search_results>0)
data_o.fp_searchResults=fpdata.search_results;if(fp.gtm.user_role&&fpdata.user.role&&fpdata.user.role.length>0)
data_o.fp_visitorType=fpdata.user.role;if(fp.gtm.terms&&fpdata.terms&&fpdata.terms.length>0){data_o.fp_contentTerms=fpdata.terms}
if(!fp.gtm.no_container){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=!0;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f)})(window,document,'script',fp.gtm.datalayer,fp.gtm.id)}
window[fp.gtm.datalayer].push(data_o);FP.loaded('gtm','gtm','[FP] GTM loaded')}
if(fp.gtm&&fp.gtm.id)FP.load('gtm','fupi_head_gtm',['head_helpers'])
;