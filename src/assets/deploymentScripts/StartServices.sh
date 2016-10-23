#!/bin/bash
#Deployment script to start services
#Reza Esfandyari 10/20/2016
echo Starting service
echo Listing the current directory:
pwd
echo Listing the ls:
ls -la
echo listing port before staring
sudo netstat -ntlp | grep LISTEN
sudo pm2 start http-server -- /home/ubuntu/www/app
echo listing port afetr starting
sudo netstat -ntlp | grep LISTEN
sudo pm2 list
echo Finishing up starting services
