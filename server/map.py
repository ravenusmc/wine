#This file will get the data to build the world map
#Importing outside libraries
import numpy as np
import pandas as pd

class Map():

    def __init__(self):
        self.data = pd.read_csv('./data/wine_one.csv')

    def get_wine_data(self, variety):
        #Getting all distinct countries
        countries = self.data.country.unique()
        #This list will hold all of the country and wine scores
        wine_data = []
        for country in countries:
            #resetting the data for each loop
            data = self.data
            #This list will hold the data for a single country
            single_country = []
            data = data[(data.country == country) & (data.variety == variety)]
            #Getting the mean score.
            mean = data["points"].mean()
            #changing the format of the mean
            mean = float(format(mean, '.2f'))
            if country == 'US':
                country = 'United States'
            single_country.append(country)
            single_country.append(mean)
            wine_data.append(single_country)
        return wine_data



# map = Map()
# map.get_wine_data()
