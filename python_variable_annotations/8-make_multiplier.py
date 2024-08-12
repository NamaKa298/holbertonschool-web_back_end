#!/usr/bin/env python3
from typing import Callable
"""8. Complex types - functions"""


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Retourne une fonction qui multiplie un float par un autre float"""
    def mult(n: float) -> float:
        return n * multiplier
    return mult
