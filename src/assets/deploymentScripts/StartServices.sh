#!/bin/bash
#Deployment script to start services
#Reza Esfandyari 10/20/2016
echo Starting services
mkdir RezaTestEnvironment
pm2 start http-server cd ../..
echo Finishing up starting services 
