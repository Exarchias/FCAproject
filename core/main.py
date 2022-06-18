# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
import differences
import os
import pandas as pd
import numpy as np

#This method tests the differences module.
def testDifferences():
    print(differences.filelist)
    df = differences.read_data("-rawfcsdata_1_june.txt")
    print(df.head)

    #Remember: columns fitst, (xbin), raws after it, (ybin)
    """Input arguments      = 
    outfile = destination file
    dataf   = frame containing data to be saved
    xbin    = number of column
    ybin    = number of rows"""
    differences.save_diff_data("testSavedDiff", df, 1, 11298)
    differences.get_and_save_diff("-rawfcsdata_1_june.txt", "-rawfcsdata_2_june.txt")


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    testDifferences()

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
