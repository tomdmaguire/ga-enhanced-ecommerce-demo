use Rack::Static,
  :root => "build"

run lambda { |env|
  file = env['PATH_INFO'] == '/' ? 'index' : env['PATH_INFO']
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open("build/#{file.gsub(/(\/)$/, '')}.html", File::RDONLY)
  ]
}
