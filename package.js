Package.describe({
  summary: "Use IP address based whitelists and blacklists with your meteor app",
  version: "1.0.4",
  git: "https://github.com/scorpwarp23/ip-blocker.git"
});

Package.on_use(function(api) {
    api.versionsFrom('METEOR@1.0.2');
    api.use('iron:router@1.0.5', 'server');
    api.use('webapp', 'server');
    api.use('mrt:redis@0.1.3','server');
    api.use('underscore','server');
    // make sure we come after livedata, so we load after the sockjs
    // server has been instantiated.
    api.add_files('ip_blocker_config.js', 'server');
    api.export('IP_BLOCKER', 'server');
    api.add_files('ip_blocker.js', 'server');


});

