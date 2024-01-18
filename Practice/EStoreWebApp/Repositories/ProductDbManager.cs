using EStoreWebApp.Entities;

namespace EStoreWebApp.Repositories;

public class ProductDbManager : IProductDbManager
{

    public ProductDbManager(){
        Console.WriteLine("In product db manager---------------------------------------->");
    }

    public bool AddProduct(Product p)
    {
        using(var context=new CollectionContext()){

            context.Add(p);
            context.SaveChanges();
            return true;
        }
        throw new NotImplementedException();
    }

    public bool Delete(int PId)
    {   
        Console.WriteLine("in delete----------------"+PId);
        using(var context=new CollectionContext()){
            context.Remove(context.Products.Find(PId));
            context.SaveChanges();
            Console.WriteLine("Delete done------------>");
            return true;
        }
        throw new NotImplementedException();
    }

    public List<Product> GetAll()
    {
        using(var context=new CollectionContext()){
           var  products=from prod in context.Products select prod;
           return products.ToList<Product>();
            
        }
        throw new NotImplementedException();
    }

    public Product GetById(int PId)
    {
        using(var context=new CollectionContext()){
            var product=context.Products.Find(PId);
            return product;
        }
        throw new NotImplementedException();
    }

    public bool Update(Product pUpd)
    {   
        using(var context=new CollectionContext()){
            Product prod=context.Products.Find(pUpd.PId);
            prod.Name=pUpd.Name;
            prod.Price=pUpd.Price;
            prod.Brand=pUpd.Brand;
            prod.Type=pUpd.Type;
            context.SaveChanges();
            return true;
        }

        throw new NotImplementedException();
    }
}