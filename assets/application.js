ActiveRecord::NoDatabaseError at /assets/application.js
=======================================================

> FATAL:  database "guillaumefradin_dev" does not exist
Run `$ bin/rake db:create db:migrate` to create your database

activerecord (4.1.0) lib/active_record/connection_adapters/postgresql_adapter.rb, line 891
------------------------------------------------------------------------------------------

``` ruby
  886             PostgreSQLColumn.money_precision = (postgresql_version >= 80300) ? 19 : 10
  887   
  888             configure_connection
  889           rescue ::PG::Error => error
  890             if error.message.include?("does not exist")
> 891               raise ActiveRecord::NoDatabaseError.new(error.message)
  892             else
  893               raise error
  894             end
  895           end
  896   
```

App backtrace
-------------



Full backtrace
--------------

 - activerecord (4.1.0) lib/active_record/connection_adapters/postgresql_adapter.rb:891:in `rescue in connect'
 - activerecord (4.1.0) lib/active_record/connection_adapters/postgresql_adapter.rb:881:in `connect'
 - activerecord (4.1.0) lib/active_record/connection_adapters/postgresql_adapter.rb:568:in `initialize'
 - activerecord (4.1.0) lib/active_record/connection_adapters/postgresql_adapter.rb:41:in `postgresql_connection'
 - activerecord (4.1.0) lib/active_record/connection_adapters/abstract/connection_pool.rb:435:in `new_connection'
 - activerecord (4.1.0) lib/active_record/connection_adapters/abstract/connection_pool.rb:445:in `checkout_new_connection'
 - activerecord (4.1.0) lib/active_record/connection_adapters/abstract/connection_pool.rb:416:in `acquire_connection'
 - activerecord (4.1.0) lib/active_record/connection_adapters/abstract/connection_pool.rb:351:in `block in checkout'
 - /home/frading/.rvm/rubies/ruby-2.1.0/lib/ruby/2.1.0/monitor.rb:211:in `mon_synchronize'
 - activerecord (4.1.0) lib/active_record/connection_adapters/abstract/connection_pool.rb:350:in `checkout'
 - activerecord (4.1.0) lib/active_record/connection_adapters/abstract/connection_pool.rb:265:in `block in connection'
 - /home/frading/.rvm/rubies/ruby-2.1.0/lib/ruby/2.1.0/monitor.rb:211:in `mon_synchronize'
 - activerecord (4.1.0) lib/active_record/connection_adapters/abstract/connection_pool.rb:264:in `connection'
 - activerecord (4.1.0) lib/active_record/connection_adapters/abstract/connection_pool.rb:541:in `retrieve_connection'
 - activerecord (4.1.0) lib/active_record/connection_handling.rb:113:in `retrieve_connection'
 - activerecord (4.1.0) lib/active_record/connection_handling.rb:87:in `connection'
 - activerecord (4.1.0) lib/active_record/query_cache.rb:51:in `restore_query_cache_settings'
 - activerecord (4.1.0) lib/active_record/query_cache.rb:43:in `rescue in call'
 - activerecord (4.1.0) lib/active_record/query_cache.rb:32:in `call'
 - activerecord (4.1.0) lib/active_record/connection_adapters/abstract/connection_pool.rb:621:in `call'
 - actionpack (4.1.0) lib/action_dispatch/middleware/callbacks.rb:29:in `block in call'
 - activesupport (4.1.0) lib/active_support/callbacks.rb:82:in `run_callbacks'
 - actionpack (4.1.0) lib/action_dispatch/middleware/callbacks.rb:27:in `call'
 - actionpack (4.1.0) lib/action_dispatch/middleware/reloader.rb:73:in `call'
 - actionpack (4.1.0) lib/action_dispatch/middleware/remote_ip.rb:76:in `call'
 - better_errors (1.1.0) lib/better_errors/middleware.rb:84:in `protected_app_call'
 - better_errors (1.1.0) lib/better_errors/middleware.rb:79:in `better_errors_call'
 - better_errors (1.1.0) lib/better_errors/middleware.rb:56:in `call'
 - actionpack (4.1.0) lib/action_dispatch/middleware/debug_exceptions.rb:17:in `call'
 - actionpack (4.1.0) lib/action_dispatch/middleware/show_exceptions.rb:30:in `call'
 - railties (4.1.0) lib/rails/rack/logger.rb:38:in `call_app'
 - railties (4.1.0) lib/rails/rack/logger.rb:20:in `block in call'
 - activesupport (4.1.0) lib/active_support/tagged_logging.rb:68:in `block in tagged'
 - activesupport (4.1.0) lib/active_support/tagged_logging.rb:26:in `tagged'
 - activesupport (4.1.0) lib/active_support/tagged_logging.rb:68:in `tagged'
 - railties (4.1.0) lib/rails/rack/logger.rb:20:in `call'
 - actionpack (4.1.0) lib/action_dispatch/middleware/request_id.rb:21:in `call'
 - rack (1.5.2) lib/rack/methodoverride.rb:21:in `call'
 - rack (1.5.2) lib/rack/runtime.rb:17:in `call'
 - activesupport (4.1.0) lib/active_support/cache/strategy/local_cache_middleware.rb:26:in `call'
 - rack (1.5.2) lib/rack/lock.rb:17:in `call'
 - rack (1.5.2) lib/rack/sendfile.rb:112:in `call'
 - railties (4.1.0) lib/rails/engine.rb:514:in `call'
 - railties (4.1.0) lib/rails/application.rb:144:in `call'
 - rack (1.5.2) lib/rack/content_length.rb:14:in `call'
 - thin (1.6.1) lib/thin/connection.rb:82:in `block in pre_process'
 - thin (1.6.1) lib/thin/connection.rb:80:in `pre_process'
 - thin (1.6.1) lib/thin/connection.rb:55:in `process'
 - thin (1.6.1) lib/thin/connection.rb:41:in `receive_data'
 - eventmachine (1.0.3) lib/eventmachine.rb:187:in `run'
 - thin (1.6.1) lib/thin/backends/base.rb:73:in `start'
 - thin (1.6.1) lib/thin/server.rb:162:in `start'
 - rack (1.5.2) lib/rack/handler/thin.rb:16:in `run'
 - rack (1.5.2) lib/rack/server.rb:264:in `start'
 - railties (4.1.0) lib/rails/commands/server.rb:69:in `start'
 - railties (4.1.0) lib/rails/commands/commands_tasks.rb:81:in `block in server'
 - railties (4.1.0) lib/rails/commands/commands_tasks.rb:76:in `server'
 - railties (4.1.0) lib/rails/commands/commands_tasks.rb:40:in `run_command!'
 - railties (4.1.0) lib/rails/commands.rb:17:in `<top (required)>'
 - script/rails:6:in `<main>'

