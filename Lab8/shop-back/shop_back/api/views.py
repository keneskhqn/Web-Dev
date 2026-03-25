from django.http import JsonResponse
from .models import Product, Category

def products_list(request):
    products = Product.objects.all()
    data = list(products.values())
    return JsonResponse(data, safe=False)

def products_id(request, id):
    product = Product.objects.filter(id=id).values()
    return JsonResponse(list(product), safe=False)

def categories_list(request):
    categories = Category.objects.all()
    data = list(categories.values())
    return JsonResponse(data, safe=False)

def category_detail(request, id):
    categories = Category.objects.filter(id=id).values()
    return JsonResponse(list(categories), safe=False)

def product_by_category(request, id):
    products = Product.object.filter(category_id=id).values()
    return JsonResponse(list(products), safe=False)
