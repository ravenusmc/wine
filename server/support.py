#This file will provide support to me in this project. A class used in this
#file will not be used in the project but provide data that I'll need to use.

#import libraries for use in the file
import numpy as np
import pandas as pd

class Support():

    def __init__(self):
        self.data = pd.read_csv('./data/wine_one.csv')

    def test(self):
        print(self.data.head())

support = Support()
support.test()
