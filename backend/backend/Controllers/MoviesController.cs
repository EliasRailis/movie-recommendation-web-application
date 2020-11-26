using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly MoviesService service;

        public MoviesController(MoviesService service)
        {
            this.service = service;
        }

        [HttpGet]
        public ActionResult<List<MoviesModel>> Get()
        {
            return service.Get();
        }
        
        [HttpGet("{id:length(24)}", Name = "GetMovie")]
        public ActionResult<MoviesModel> Get(string id)
        {
            var movie = service.Get(id);

            if (movie == null)
            {
                return NotFound();
            }

            return movie;
        } 

        [HttpPost]
        public ActionResult<MoviesModel> Create([FromBody] MoviesModel model)
        {
            service.Create(model);
            return CreatedAtRoute("GetMovie", new { id = model.Id.ToString() }, model);
        }
    }
}
