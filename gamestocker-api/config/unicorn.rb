rails_root = File.expand_path('../../', __FILE__)

worker_processes 2

working_directory rails_root
timeout 30
preload_app true

# unicorn.sock ファイルの PATH を変更する場合は nginx.conf の修正も必要です
listen "#{rails_root}/tmp/.unicorn.sock"
pid "#{rails_root}/tmp/.unicorn.pid"

stderr_path File.expand_path('../../log/unicorn_stderr.log', __FILE__)
stdout_path File.expand_path('../../log/unicorn_stdout.log', __FILE__)

preload_app true

before_fork do |server, worker|
  old_pid = "#{server.config[:pid]}.oldbin"
  if old_pid != server.pid
    begin
      sig = (worker.nr + 1) >= server.worker_processes ? :QUIT : :TTOU
      puts "Sending #{sig} signal to old unicorn master..."
      Process.kill(sig, File.read(old_pid).to_i)
    rescue Errno::ENOENT, Errno::ESRCH
    end
  end

  sleep 1
end

after_fork do |server, worker|
  ActiveRecord::Base.establish_connection if defined?(ActiveRecord::Base)
end
