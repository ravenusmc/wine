import numpy as np
import pandas as pd

class Data():

    def __init__(self):
        self.data = pd.read_csv('./data/wine_one.csv')

    def highest_rated_wine(self):
        #Getting all the wines with a rating of 100
        self.data = self.data[self.data.points == 100]
        #Creating a data set that only has the winery and variety columns
        self.data = self.data[['winery', 'variety', 'country']]
        #Getting rid of duplicated values
        self.data = self.data[self.data['variety'].duplicated() == True]
        #This will be a list that will used to build an array of objects
        wine_information_list = []
        #A count to loop through the dataset
        count = 0
        #looping through the data set
        while count < len(self.data):
            #This dictionary will hold the wineries and variety's
            wine_information = {}
            #setting the winery to the variety in the dictionary.
            wine_information['Winery'] = self.data.iloc[count,0]
            wine_information['Variety'] = self.data.iloc[count,1]
            wine_information['Country'] = self.data.iloc[count,2]
            wine_information_list.append(wine_information)
            count += 1
        #print(wine_information_list)
        return wine_information_list

data = Data()
data.highest_rated_wine()


































###
