import tensorflow as tf
import torch
class A :
    def __init__(self) -> None:
        pass
    def __format__(self, __format_spec: str) -> str:
        pass
a = A()
print(type(a))
b = a
c = b.type(torch.float)
print(type(b))