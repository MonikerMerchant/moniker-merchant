
(function affiliateTagger(TAG){
  // Auto-append ?tag=... to any Amazon.* link that doesn't have a tag already.
  // Runs on DOMContentLoaded and on link additions.
  function apply(el){
    var links = (el || document).querySelectorAll('a[href*="amazon."]');
    links.forEach(function(a){
      try{
        var u = new URL(a.href, location.href);
        if(!u.searchParams.get('tag')){
          u.searchParams.set('tag', TAG);
          a.href = u.toString();
        }
      }catch(e){ /* ignore */ }
    });
  }
  document.addEventListener('DOMContentLoaded', function(){ apply(); });
  // Observe future link insertions (optional, light)
  var mo = new MutationObserver(function(muts){
    muts.forEach(function(m){
      m.addedNodes && m.addedNodes.forEach(function(n){
        if(n.nodeType === 1) apply(n);
      });
    });
  });
  mo.observe(document.documentElement, { childList:true, subtree:true });
})('monikermercha-20');
