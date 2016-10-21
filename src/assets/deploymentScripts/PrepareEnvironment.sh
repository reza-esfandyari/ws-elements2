#!/bin/bash
#Deployment script used to prepare the environment
#Reza Esfandyari 10/16/2016
echo Starting prepare the environment by stopping and deleting existing running services 
pm2 list
pm2 kill
pm2 list
echo Finish up environment preparation
