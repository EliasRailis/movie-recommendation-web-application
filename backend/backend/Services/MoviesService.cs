using backend.Models;
using MongoDB.Driver;
using System.Collections.Generic;

namespace backend.Services
{
    public class MoviesService
    {
        private readonly IMongoCollection<MoviesModel> movies;

        public MoviesService()
        {
            var client = new MongoClient("mongodb://localhost:27017");
            var db = client.GetDatabase("MoviesDb");
            movies = db.GetCollection<MoviesModel>("Movies");
        }

        public List<MoviesModel> Get()
        {
            return movies.Find(movie => true).ToList();
        }

        public MoviesModel Get(string id)
        {
            return movies.Find<MoviesModel>(movie => movie.Id == id).FirstOrDefault();
        }

        public MoviesModel Create(MoviesModel model)
        {
            movies.InsertOne(model);
            return model;
        }
    }
}
