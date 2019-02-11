#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Jan 19 17:54:07 2019

@author: dipodoherty
"""

from sklearn import datasets
iris = datasets.load_iris()
digits = datasets.load_digits()

import seaborn as sns
#define variables for boxplot
iris_data = iris.data #variable for arry of data
iris_target = iris.target #variable for array of labels
sns.boxplot(data = iris_data,width=0.5,fliersize=5)
sns.set(rc={'figure.figsize':(1,10)})
