#!/usr/bin/env python3
from typing import List, Union
"""6. Complex types - mixed list"""


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Retourne la somme d'une liste de floats"""
    somme = 0.0
    for i in range(0, len(mxd_lst)):
        somme += float(mxd_lst[i])
    return somme
