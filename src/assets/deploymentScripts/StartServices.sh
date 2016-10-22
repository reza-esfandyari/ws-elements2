#!/bin/bash
#Deployment script to start services
#Reza Esfandyari 10/20/2016
echo Starting services
pm2 start http-server -- deployment-archive
echo Finishing up starting services
