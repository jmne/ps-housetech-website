---
sidebar_position: 1
---
# Nginx Setup

Diese Dokumentation beschreibt Schritt für Schritt, wie wir ein Frontend und Backend von GitLab auf einem Linux Server mit Nginx eingerichtet haben. Wir verwenden Nginx, um die Anfragen zwischen dem Frontend und Backend zu verteilen und den Zugriff auf unsere Anwendung über die entsprechende Domain oder IP zu ermöglichen.

## Schritt 1: Installation von Nginx

Zuerst installieren wir Nginx auf unserem Linux-Server:

```bash
sudo apt update
sudo apt install nginx
```

## Schritt 2: Konfiguration von Nginx für das Frontend

Unsere Nginx-Konfigurationsdatei sieht wie folgt aus:
(Kommentare erklären die einzelnen Konfigurationsoptionen)

```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;
	
	server_tokens off;
	
	return 301 https://$host$request_uri; # Weiterleitung auf HTTPS

}

server {
    listen 443 http2 ssl; # HTTPS 
	listen [::]:443 http2 ssl ipv6only=on; # HTTPS für IPv6
	
	ssl_certificate /etc/letsencrypt/live/ps-housetech.uni-muenster.de/fullchain.pem; # Zertifikat von Let's Encrypt
	ssl_certificate_key /etc/letsencrypt/live/ps-housetech.uni-muenster.de/privkey.pem;
	
	ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
	
	server_name ps-housetech.uni-muenster.de; # Domain
	
	server_tokens off;
	
	keepalive_timeout   70;
  
    gzip on; # Komprimierung aktivieren
    gzip_proxied any;
    gzip_comp_level 4;
    gzip_types text/css application/javascript image/svg+xml;
	
	location / { # Weiterleitung an das Frontend
		proxy_pass http://127.0.0.1:3000;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Prefix /;
	}
	
	location /api { # Weiterleitung an das Backend
		include uwsgi_params;
		uwsgi_read_timeout 600;
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Prefix /;
    }
}
```

## Schritt 3: Überprüfen der Nginx-Konfiguration

Überprüfen der Nginx-Konfiguration auf mögliche Syntaxfehler:

```bash
sudo nginx -t
```

## Schritt 4: Neustart von Nginx

Nginx neu starten, um die Änderungen zu übernehmen:

```bash
sudo service nginx restart
```

## Fazit

Nginx verteilt jetzt die Anfragen zwischen dem Frontend und Backend und ermöglicht den Zugriff auf unsere Anwendungen über die entsprechende Domain oder IP.

Nginx bietet eine leistungsfähige und flexible Lösung, um Webanwendungen zu betreiben und Anfragen sicher und effizient zu verwalten.

Weitere Informationen zu Nginx finden sich in der [Nginx-Dokumentation](https://nginx.org/en/docs/).
