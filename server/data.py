import numpy as np
import pandas as pd

class Data():

    def __init__(self):
        self.data = pd.read_csv('./data/wine_one.csv')

    def test(self):
        print(self.data.head())

data = Data()
data.test()
