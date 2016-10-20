#!/bin/bash
#Deployment script used to prepare the environment
#Reza Esfandyari 10/16/2016
echo Starting prepare the environment by stopping and deleting existing running services 
mkdir RezaTestEnvironment
pm2 stop all
pm2 delete all
pm2 kill
echo Finish up environment preparation
