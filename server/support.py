#This file will provide support to me in this project. A class used in this
#file will not be used in the project but provide data that I'll need to use.

#import libraries for use in the file
import numpy as np
import pandas as pd

class Support():

    def __init__(self):
        self.data = pd.read_csv('./data/wine_one.csv')

    def get_unique_countries(self):
        print(self.data.country.unique())

    def get_unique_variety(self):
        print(self.data.variety.unique())

# support = Support()
# support.get_unique_countries()
