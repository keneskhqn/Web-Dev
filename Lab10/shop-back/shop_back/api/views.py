from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


# def products_list(request):
#     products = Product.objects.all()
#     data = list(products.values())
#     return JsonResponse(data, safe=False)

# def products_id(request, id):
#     product = Product.objects.filter(id=id).values()
#     return JsonResponse(list(product), safe=False)

# def categories_list(request):
#     categories = Category.objects.all()
#     data = list(categories.values())
#     return JsonResponse(data, safe=False)

# def category_detail(request, id):
#     categories = Category.objects.filter(id=id).values()
#     return JsonResponse(list(categories), safe=False)

# def product_by_category(request, id):
#     products = Product.object.filter(category_id=id).values()
#     return JsonResponse(list(products), safe=False)
