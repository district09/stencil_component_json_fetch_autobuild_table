# README #

Codebase for a stencil web component that generates a table from a given json.  

### properties :
* apiurl : URL that serves the json
* columns: the properties from your json you wish to display (tested with single level nested json)
* filters : the columns you wish a filter on. URL query filtering is used on the properties.
* limitqueryparameter : the name of the url parameter used for retrieving the limit or count of items.
* offsetqueryparameter : the name of the url parameter to set an offset on a collection of items.
* totalparameter : the name of a property in the json that gives the total items in a collection. This to calculate the amount of pages, if not given the pages are set to 1.



        <json-autobuild-table
            apiurl="https://thesimpsonsquoteapi.glitch.me/quotes?"
            columns='["character","quote"]'
            filters='["character"]'
            limitqueryparameter="count"  
            offsetqueryparameter="offset"
            totalparameter="total"  
        /> 

## Features ##

* A
* List
* Off
* All
* The
* Features

## Security ##
Always keep following security rules in mind when using credentials!

### How to use the appliction ###

A short discription on which security measures are implemented and how to get them to work. 

## Dependencies

## Building the source code ##

### Locally ###

### S2I ###

### Docker ###

## Running the application ##

### Environment variables ###

## Testing the application ##

Run integration tests using the [Karate framework](https://github.com/intuit/karate). See the [testing documentation](./karate/README.md) on how to run the tests locally and more information. 