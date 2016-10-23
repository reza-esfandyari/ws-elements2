#!/bin/bash
#Deployment script used to prepare the environment
#Reza Esfandyari 10/16/2016
echo Starting prepare the environment by stopping and deleting existing running services
echo Listing the current directory:
pwd
echo Listing the ls:
ls -la
echo listing port before clean up
sudo netstat -ntlp | grep LISTEN
echo listing process before stoping
sudo pm2 list
echo STOPING the process
sudo pm2 stop http-server
echo DELETE the process
sudo pm2 delete http-server
echo killing all process
sudo pm2 kill
echo Showing the the process after deletion
sudo pm2 list
echo listing port after clean up
sudo netstat -ntlp | grep LISTEN
echo Finish up environment preparation
