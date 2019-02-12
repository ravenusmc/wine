#This file will get the data to build the world map
#Importing outside libraries
import numpy as np
import pandas as pd
import math

class Map():

    def __init__(self):
        self.data = pd.read_csv('./data/wine_one.csv')
        # self.data = pd.read_csv('./data/who_suicide_statistics.csv')

    def get_wine_data(self, variety):
        # print(self.data.dtypes)
        #This list will hold all of the country and wine scores
        wine_data = []
        #Getting all distinct countries
        # countries = self.data.country.unique()
        #Please not that the countries data column had an issue with it so
        #I used these countries instead.
        countries = ['United States', 'Spain', 'France', 'Italy', 'New Zealand', 'Bulgaria',
        'Argentina', 'Australia', 'Portugal', 'Israel', 'South Africa', 'Greece'
        'Chile', 'Morocco','Romania', 'Germany', 'Canada', 'Moldova', 'Hungary',
        'Austria', 'Croatia','Slovenia','India', 'Turkey', 'Macedonia','Lebanon',
        'Serbia', 'Uruguay', 'Switzerland', 'Albania', 'Bosnia and Herzegovina',
        'Brazil', 'Cyprus', 'Lithuania', 'Japan', 'China', 'South Korea', 'Ukraine',
        'England', 'Mexico', 'Georgia', 'Montenegro', 'Luxembourg', 'Slovakia',
        'Czech Republic', 'Egypt', 'Tunisia']
        for country in countries:
            #resetting the data for each loop
            data = self.data
            #This list will hold the data for a single country
            single_country = []
            if country == 'United States':
                country = 'US'
            data = data[(data.country == country) & (data.variety == variety)]
            #Getting the mean score.
            mean = data["points"].mean()
            #changing the format of the mean
            mean = float(format(mean, '.2f'))
            if math.isnan(mean):
                mean = 0
            #Switching back to the full name since the map needs it in that format.
            if country == 'US':
                country = 'United States'
            single_country.append(country)
            single_country.append(mean)
            wine_data.append(single_country)
        return wine_data




# map = Map()
# map.get_wine_data('Riesling')
