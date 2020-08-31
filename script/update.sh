#!/bin/bash
echo 'Запуск обновления';
rm -rf dist;
ng build --configuration=production;
cp .htaccess dist/client/
scp -r dist/client/* evolov_footbal@evolov.beget.tech:/home/e/evolov/footcapital.ru/public_html
#ssh rdwork_linaz_front@rdwork.beget.tech '
#rm -rf public_html/*;
#mv client-arenda/* public_html/;
#rm -rf client-arenda;'
echo 'Конец обновления';
